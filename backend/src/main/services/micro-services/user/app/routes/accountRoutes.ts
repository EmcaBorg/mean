import {BaseRoutes} from "../../../../common-services/app/rest/router";
import {RequestProcess} from "../../../../common-services/app/rest/requestProcess";
import {AccountApiDefinition, AccountActions} from "../../../../../common/app/api/definitions/accountApiDefinition";
import {AccountComponent} from "../components/accountComponent";
import {Express} from "express";

export class AccountRoutes extends BaseRoutes {

    constructor(public app: Express) {
        super(app, new AccountApiDefinition());
    }

    createAccount(process: RequestProcess): void {
        new AccountComponent().createAccount(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    updateAccount(process: RequestProcess): void {
        new AccountComponent().updateAccount(
            process.getBody(),
            process.getUser(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    changeAccountPassword(process: RequestProcess): void {
        new AccountComponent().changeAccountPassword(
            process.getBody(),
            process.getUser(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    updateAccountImage(process: RequestProcess): void {
        new AccountComponent().updateAccountImage(
            process.getBody(),
            process.getUser(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    deleteAccount(process: RequestProcess): void {
        new AccountComponent().deleteAccount(
            process.getBody(),
            process.getUser(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    validateAccount(process: RequestProcess): void {
        new AccountComponent().validateAccount(
            process.getPathUserId(),
            process.getPathValidationId(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    sendValidationId(process: RequestProcess): void {
        new AccountComponent().sendValidationId(
            process.getPathEmail(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    usernameAvailability(process: RequestProcess): void {
        new AccountComponent().usernameAvailability(
            process.getPathUsername(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    emailAvailability(process: RequestProcess): void {
        new AccountComponent().emailAvailability(
            process.getPathEmail(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    configureRoutes(): void {
        this.publishApiAction(AccountActions.createAccount, this.createAccount);
        this.publishApiAction(AccountActions.updateAccount, this.updateAccount);
        this.publishApiAction(AccountActions.changeAccountPassword, this.changeAccountPassword);
        this.publishApiAction(AccountActions.updateAccountImage, this.updateAccountImage);
        this.publishApiAction(AccountActions.validateAccount, this.validateAccount);
        this.publishApiAction(AccountActions.sendValidationId, this.sendValidationId);
        this.publishApiAction(AccountActions.usernameAvailability, this.usernameAvailability);
        this.publishApiAction(AccountActions.emailAvailability, this.emailAvailability);
        this.publishApiAction(AccountActions.deleteAccount, this.deleteAccount);
    }
}