import { NotificationType } from "./notificationType";
import {MailConstants} from "../../../../../common/config/constants/mailConstants";
import {Language} from "../../../../../database/app/users/model/user";

export class Notification {
    public subject: string;
    public message: string;
    constructor(public type: NotificationType, language: string) {
        var template = this.getEmailTemplate(language);
        var url = '';
        switch (type) {
            case NotificationType.EMAIL_SIGN_UP_CONFIRMATION: {
                var subject = template.SIGN_UP_CONFIRMATION.SUBJECT;
                var message = template.SIGN_UP_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_SIGN_UP_VALIDATION: {
                var subject = template.SIGN_UP_VALIDATION.SUBJECT;
                var message = template.SIGN_UP_VALIDATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_RESET_PASSWORD_IDENTIFICATION: {
                var subject = template.RESET_PASSWORD_IDENTIFICATION.SUBJECT;
                var message = template.RESET_PASSWORD_IDENTIFICATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_RESELLER_PASSWORD_IDENTIFICATION: {
                var subject = template.RESELLER_PASSWORD_IDENTIFICATION.SUBJECT;
                var message = template.RESELLER_PASSWORD_IDENTIFICATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_RESELLER_CREATE: {
                var subject = template.RESELLER_CREATE.SUBJECT;
                var message = template.RESELLER_CREATE.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_VOUCHER_CONFIRMATION: {
                var subject = template.VOUCHER_CONFIRMATION.SUBJECT;
                var message = template.VOUCHER_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_CHANGE_PASSWORD_CONFIRMATION: {
                var subject = template.CHANGE_PASSWORD_CONFIRMATION.SUBJECT;
                var message = template.CHANGE_PASSWORD_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_CHANGE_EMAIL_VALIDATION: {
                var subject = template.CHANGE_EMAIL_VALIDATION.SUBJECT;
                var message = template.CHANGE_EMAIL_VALIDATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_SEASON_CARD_CONFIRMATION: {
                var subject = template.SEASON_CARD_CONFIRMATION.SUBJECT;
                var message = template.SEASON_CARD_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_BASIC_CARD_CONFIRMATION: {
                var subject = template.BASIC_CARD_CONFIRMATION.SUBJECT;
                var message = template.BASIC_CARD_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_VOUCHER_CARD_CONFIRMATION: {
                var subject = template.VOUCHER_CARD_CONFIRMATION.SUBJECT;
                var message = template.VOUCHER_CARD_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
            case NotificationType.EMAIL_OLD_CARD_CONFIRMATION: {
                var subject = template.OLD_CARD_CONFIRMATION.SUBJECT;
                var message = template.OLD_CARD_CONFIRMATION.MESSAGE;
                this.subject = subject;
                this.message = MailConstants.getCompleteEmailMessage(message, subject, url);
                break;
            }
        }
    }

    getEmailTemplate(language:string) {
        if (language == Language.GERMAN) {
            return MailConstants.TEMPLATE.DE;
        } else {
            return MailConstants.TEMPLATE.EN;
        }
    }
}

export class EmailNotification extends Notification {
    from: string;
    to: string;
    cc: string;
    bcc: string;
    attachments: any;

    constructor(type: NotificationType, language: string) {
        super(type, language);
    }

    toHtmlMessage() {
        return {
            from: this.from,
            to: this.to,
            cc: this.cc,
            bcc: this.bcc,
            html: this.message,
            subject: this.subject,
            attachments: this.attachments
        }
    }
}