import { Service } from "../../rest/service";
import { EmailNotification } from "./notification";
import { NotificationType } from "./notificationType";
import * as nodemailer from 'nodemailer';
import * as util from 'util';
import {Environments} from "../../../../../common/config/environments/environments";
import {Utils} from "../../../../../common/app/utils";
import {ApiResponseBehaviorDefinition} from "../../../../../common/app/api/apiDefinition";
import {UserApiDefinition} from "../../../../../common/app/api/definitions/userApiDefinition";
import {Logger} from "log4js";

var ns: NotificationService;

export class NotificationService implements Service {

    log:Logger = Utils.getLogger('NotificationService');

    constructor() {
        ns = this;
    }

    getActionBehavior(action:string, behavior:string): ApiResponseBehaviorDefinition {
        var api = new UserApiDefinition();
        return api.findActionBehavior(action, behavior);
    };

    sendNotification(notification: EmailNotification, failed: (err: any)=>void, success: ()=>void): void {
        var transporter = ns.getTransporter();
        transporter.sendMail(notification.toHtmlMessage(), function (error) {
            transporter.close();
            if (error) {
                Utils.getLogger("Notification").error("Failed to send mail", error);
                failed(error);
            } else {
                success();
            }
        });
    }

    sendSignUpConfirmation(name: string, email: string, language: string, pdfQrCode, failed: (err: any)=> void, success: ()=> void): void {
        var notification = new EmailNotification(NotificationType.EMAIL_SIGN_UP_CONFIRMATION, language);
        notification.to = email;
        notification.message = util.format(notification.message, name);
        notification.from = Environments.mail.email;
        notification.attachments = [{ filename: 'QRCode.pdf', content: pdfQrCode}];
        ns.sendNotification(notification, failed, success);
    }

    sendChangePasswordConfirmation(name: string, email: string, language: string, failed: (err: any)=> void, success: ()=> void): void {
        var notification = new EmailNotification(NotificationType.EMAIL_CHANGE_PASSWORD_CONFIRMATION, language);
        notification.to = email;
        notification.message = util.format(notification.message, name);
        notification.from = Environments.mail.email;
        ns.sendNotification(notification, failed, success);
    }

    sendSignUpValidationId(name: string, email: string, userId: string, validationId: string, language: string, failed: (err: any)=> void, success: ()=> void): void {
        var url = this.getValidationUrl(userId, validationId);
        var iosLink = "NcpDeepLink://validate/" + userId + "/" + validationId;
        var androidLink = "NcpDeepLink://validate/" + userId + "/" + validationId;
        var notification = new EmailNotification(NotificationType.EMAIL_SIGN_UP_VALIDATION, language);
        notification.to = email;
        notification.message = util.format(notification.message, name, url, iosLink, androidLink);
        notification.from = Environments.mail.email;
        ns.sendNotification(notification, failed, success);
    }

    sendChangeEmailValidation(name: string, email: string, username: string, validationId: string, language: string, failed: (err: any)=> void, success: ()=> void): void {
        var url = this.getValidationUrl(username, validationId);
        var iosLink = "NcpDeepLink://validateAccount/" + username + "/" + validationId;
        var androidLink = "NcpDeepLink://validateAccount/" + username + "/" + validationId;
        var notification = new EmailNotification(NotificationType.EMAIL_CHANGE_EMAIL_VALIDATION, language);
        notification.to = email;
        notification.message = util.format(notification.message, name, url, iosLink, androidLink);
        notification.from = Environments.mail.email;
        ns.sendNotification(notification, failed, success);
    }

    sendUserIdentification(name: string, email: string, identificationId: string, language: string, failed: (err: any)=> void, success: ()=> void): void {
        var url = this.getChangePasswordUrl(email, identificationId);
        var iosLink = "NcpDeepLink://change-password/" + identificationId + "/" + email;
        var androidLink = "NcpDeepLink://change-password/" + identificationId + "/" + email;
        var notification = new EmailNotification(NotificationType.EMAIL_RESET_PASSWORD_IDENTIFICATION, language);
        notification.to = email;
        notification.message = util.format(notification.message, name, url, iosLink, androidLink);
        notification.from = Environments.mail.email;
        ns.sendNotification(notification, failed, success);
    }

    getValidationUrl(userId: string, validationId: string) {
        var basePath = '';//TODO: Put public host;
        return basePath + "/validate/" + userId + "/" + validationId;
    }

    getChangePasswordUrl(email: string, identificationId: string) {
        var basePath = '';//TODO: Put public host;
        return basePath + "/#/change-password?identificationId=" + identificationId + "&email=" + email;
    }

    getNewPasswordUrl(email: string, identificationId: string) {
        var basePath = '';//TODO: Put public host;
        return basePath + "/#/new-password?identificationId=" + identificationId + "&email=" + email;
    }

    getTransporter() {
        var options = {
            host: Environments.mail.host,
            port: Environments.mail.port,
            auth: {
                user: Environments.mail.user,
                pass: Environments.mail.password
            },
            requireTLS: true,
            tls: {
                rejectUnauthorized: false
            }
        };

        return nodemailer.createTransport(options);
    }
}