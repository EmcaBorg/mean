import {AuthComponent} from '../components/authComponent';
import {RequestProcess} from "../../../../common-services/app/rest/requestProcess";
import {BaseRoutes} from "../../../../common-services/app/rest/router";
import {AuthApiDefinition, AuthActions} from "../../../../../common/app/api/definitions/authApiDefinition";
import {Constants} from "../../../../../common/config/constants/constants";
import {LoginResponse} from "../../../../common-services/app/services/auth/authService";
import {Utils} from "../../../../../common/app/utils";
import {Express} from "express";

export class AuthRoutes extends BaseRoutes {

    constructor(public app: Express) {
        super(app, new AuthApiDefinition());
    }

    login(process: RequestProcess): void {
        new AuthComponent().login(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (loginResponse: LoginResponse) {
                process.res.set(Constants.AUTH, Utils.encryptSession(loginResponse.session));
                process.sendSuccessResponse(loginResponse.responseData);
            }
        );
    }

    /*
    changePassword(process: RequestProcess): void {
        this.component.changePassword(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response: any) {
                process.sendSuccessResponse(response);
            }
        );
    }


    changePassword(process: RequestProcess) {
        this.component.changePassword(process.getBody(), function (err: any) {
            if (!err) {
                process.sendSuccessResponse("Success");
            } else {
                process.sendFailedResponse("Failed: " + err);
            }
        })
    }

    changeUserPassword(process: RequestProcess) {
        this.component.changeUserPassword(process.getBody(), function (err: any, res: any) {
            if (!err) {
                process.sendSuccessResponse("Success", res);
            } else {
                process.sendFailedResponse("Failed: " + err);
            }
        })
    }

    sendUserIdentification(process: RequestProcess) {
        this.component.sendUserIdentification(process.getBody(), function (err: any) {
            if (!err) {
                process.sendSuccessResponse();
            } else {
                process.sendFailedResponse("Failed: " + err);
            }
        })
    }*/

    logout(process: RequestProcess): void {
        new AuthComponent().logout(
            process.getAuthHeader(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    configureRoutes(): void {
        this.publishApiAction(AuthActions.login, this.login);
        this.publishApiAction(AuthActions.logout, this.logout);
/*
        app.post(status.login.endpoint, function (req, res) {
            req.requestProcessDetails = module;
            res.responseProcessDetails = status.login;
            var api = new RestApi(req, res);
            api.call(Permission.ANY, instance.login);
        });

        app.post(status.changePassword.endpoint, function (req, res) {
            req.requestProcessDetails = userModule;
            res.responseProcessDetails = status.changePassword;
            var api = new RestApi(req, res);
            api.call(Permission.READ, instance.changePassword);
        });

        app.post(status.changeUserPassword.endpoint, function (req, res) {
            req.requestProcessDetails = module;
            res.responseProcessDetails = status.changeUserPassword;
            var api = new RestApi(req, res);
            api.call(Permission.ANY, instance.changeUserPassword);
        });

        app.post(status.setUpSecurityQuestion.endpoint, function (req, res) {
            req.requestProcessDetails = userModule;
            res.responseProcessDetails = status.setUpSecurityQuestion;
            var api = new RestApi(req, res);
            api.call(Permission.UPDATE, instance.setUpSecurityQuestion);
        });

        app.post(status.getSecurityQuestion.endpoint, function (req, res) {
            req.requestProcessDetails = userModule;
            res.responseProcessDetails = status.getSecurityQuestion;
            var api = new RestApi(req, res);
            api.call(Permission.ANY, instance.getSecurityQuestion);
        });

        app.deleteAccount(status.deleteSecurityQuestion.endpoint, function (req, res) {
            req.requestProcessDetails = userModule;
            res.responseProcessDetails = status.deleteSecurityQuestion;
            var api = new RestApi(req, res);
            api.call(Permission.UPDATE, instance.deleteSecurityQuestion);
        });

        app.post(status.sendUserIdentification.endpoint, function (req, res) {
            req.requestProcessDetails = module;
            res.responseProcessDetails = status.sendUserIdentification;
            var api = new RestApi(req, res);
            api.call(Permission.ANY, instance.sendUserIdentification);
        });

        app.deleteAccount(status.logout.endpoint, function (req, res) {
            req.requestProcessDetails = module;
            res.responseProcessDetails = status.logout;
            var api = new RestApi(req, res);
            api.call(Permission.DELETE, instance.logout);
        });
 */
    }
}