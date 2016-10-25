import {Component} from "../../../../common-services/app/rest/component";
import {Logger} from "log4js";
import {Utils} from "../../../../../common/app/utils";
import {AccountService} from "../../../../common-services/app/services/users/accountService";
import {IUser, IPublicUserDetails} from "../../../../../database/app/users/model/user";
import {Validator} from "../../../../common-services/app/validator/validator";
import {Environments} from "../../../../../common/config/environments/environments";
import {ChangePasswordRequest, UpdateImageRequest, DeleteRequest} from "./requests";
import {UserService} from "../../../../common-services/app/services/users/userService";

export class AccountComponent implements Component {
    log:Logger = Utils.getLogger('AccountComponent');
    accountService: AccountService;
    userService: UserService;

    constructor() {
        this.accountService = new AccountService();
        this.userService = new UserService();
    }

    createAccount(data: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            this.accountService.createAccount(data, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    updateAccount(newDetails: IPublicUserDetails, user: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            this.accountService.updateAccount(newDetails, user, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    changeAccountPassword(request: ChangePasswordRequest, user: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validatePassword(request.oldPassword);
            Validator.validatePassword(request.newPassword);
            this.accountService.changeAccountPassword(request.oldPassword, request.newPassword, user, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    updateAccountImage(request: UpdateImageRequest, user: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validateString(request.image, 'User image');
            Validator.validateLength(request.image.length, Environments.properties.maxImageSize, "Account image");
            this.accountService.updateAccountImage(request.image, user, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    validateAccount(userId: string, validationId: string, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validateString(userId, 'User id');
            Validator.validateString(validationId, 'Validation id');
            this.accountService.validateAccount(userId, validationId, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    sendValidationId(email: string, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validateString(email, 'User email');
            this.accountService.sendValidationId(email, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    usernameAvailability(username: string, failed: (err: any)=> void, success: (res: any)=> void) {
        try {
            this.userService.findByUsername(
                username,
                function () {
                    success({ username: username, alreadyUsed: false });
                },
                function () {
                    success({ username: username, alreadyUsed: true });
                }
            );
        } catch (ex) {
            failed(ex);
        }
    }

    emailAvailability(email: string, failed: (err: any)=> void, success: (res: any)=> void) {
        try {
            this.userService.findByEmail(
                email,
                function () {
                    success({ email: email, alreadyUsed: false });
                },
                function () {
                    success({ email: email, alreadyUsed: true });
                }
            );
        } catch (ex) {
            failed(ex);
        }
    }

    deleteAccount(deleteRequest: DeleteRequest, user: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validatePassword(deleteRequest.password);
            if (Utils.comparePassword(deleteRequest.password, user.privateUserDetails.password)) {
                this.accountService.deleteAccount(user.userId, failed, success);
            } else {
                failed(new Error('Wrong user password.'));
            }
        } catch (ex) {
            failed(ex);
        }
    }
}