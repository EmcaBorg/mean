import {AuthComponent} from '../components/authComponent';
import {AuthActions, AuthApiDefinition } from "../../../../../common/app/api/definitions/authApiDefinition";
import {RequestProcess} from "../../../../common-services/app/rest/requestProcess";
import {BaseRoutes} from "../../../../common-services/app/rest/router";
import {Express} from "express";

export class RoleRoutes extends BaseRoutes {

    constructor(public app: Express) {
        super(app, new AuthApiDefinition());
    }

    searchRoles(process: RequestProcess): void {
        new AuthComponent().searchRoles(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    getRole(process: RequestProcess): void {
        new AuthComponent().getRole(
            process.getPathId(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    createRole(process: RequestProcess): void {
        new AuthComponent().createRole(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    updateRole(process: RequestProcess): void {
        new AuthComponent().updateRole(
            process.getBody(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    deleteRole(process: RequestProcess): void {
        new AuthComponent().deleteRole(
            process.getPathId(),
            function (err) {
                process.sendFailedResponse(err);
            },
            function (response?: any) {
                process.sendSuccessResponse(response);
            }
        );
    }

    deleteRoles(process: RequestProcess): void {
        new AuthComponent().deleteRoles(
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
        this.publishApiAction(AuthActions.createRole, this.createRole);
        this.publishApiAction(AuthActions.updateRole, this.updateRole);
        this.publishApiAction(AuthActions.deleteRole, this.deleteRole);
        this.publishApiAction(AuthActions.deleteRoles, this.deleteRoles);
        this.publishApiAction(AuthActions.getRole, this.getRole);
        this.publishApiAction(AuthActions.searchRoles, this.searchRoles);
    }
}
