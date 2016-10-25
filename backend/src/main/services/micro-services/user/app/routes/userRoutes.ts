import {UserActions, UserApiDefinition} from "../../../../../common/app/api/definitions/userApiDefinition";
import {BaseRoutes} from "../../../../common-services/app/rest/router";
import {RequestProcess} from "../../../../common-services/app/rest/requestProcess";
import {UserComponent} from "../components/userComponent";
import {Express} from "express";

export class UserRoutes extends BaseRoutes {
    
    constructor(public app: Express) {
        super(app, new UserApiDefinition());
    }

    findUserByUserId(process: RequestProcess): void {
        new UserComponent().findUserByUserId(
            process.getPathId(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    findUserByUsername(process: RequestProcess): void {
        new UserComponent().findUserByUsername(
            process.getPathUsername(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    searchUsersByFilter(process: RequestProcess): void {
        new UserComponent().searchUsersByFilter(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    updateUser(process: RequestProcess): void {
        new UserComponent().updateUser(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    deleteUser(process: RequestProcess): void {
        new UserComponent().deleteUser(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    deleteUsers(process: RequestProcess): void {
        new UserComponent().deleteUsers(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    configureRoutes(): void {
        this.publishApiAction(UserActions.findUserByUserId, this.findUserByUserId);
        this.publishApiAction(UserActions.findUserByUsername, this.findUserByUsername);
        this.publishApiAction(UserActions.searchUsersByFilter, this.searchUsersByFilter);
        this.publishApiAction(UserActions.updateUser, this.updateUser);
        this.publishApiAction(UserActions.deleteUser, this.deleteUser);
        this.publishApiAction(UserActions.deleteUsers, this.deleteUsers);
    }
}