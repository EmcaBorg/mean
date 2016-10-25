import {Session} from "../security/session";
import {Crypt} from "../security/crypt";
import {ResponseBuilder} from "./responseBuilder";
import {ResponseData} from "../../../../common/app/api/responseData";
import {Permission} from "../../../../common/app/security/permission";
import {Constants} from "../../../../common/config/constants/constants";
import {Utils} from "../../../../common/app/utils";
import {Database} from "../../../../database/database";
import {Exception} from "../../../../common/app/exception/exception";
import {IUser} from "../../../../database/app/users/model/user";
import {
    ApiResponseBehaviorDefinition, ApiActionDefinition,
    ApiDefinition, BaseApiDefinition
} from "../../../../common/app/api/apiDefinition";
import {
    AuthApiDefinition, AuthActions,
    AuthBehaviors
} from "../../../../common/app/api/definitions/authApiDefinition";
import {IRole} from "../../../../database/app/users/model/role";
import {ServerBehaviors} from "../../../../common/app/api/definitions/serverApiDefinition";
import {Validator} from "../validator/validator";
    
export class RequestProcess {

    builder = new ResponseBuilder();
    session: Session;
    user: IUser;
    roles: IRole[];
    action: string;
    actionDefinition: ApiActionDefinition;
    apiDefinition: ApiDefinition;
    callback: (process: RequestProcess) => void;

    constructor(public req: any, public res: any) {}

    validateUserSession(apiDefinition: ApiDefinition, action: string, callback: (process: RequestProcess) => void): void {
        var process: RequestProcess = this;
        try {
            this.action = action;
            this.actionDefinition = apiDefinition.findAction(action);
            this.apiDefinition = apiDefinition;
            this.callback = callback;
            this.validateSession();
        } catch (ex) {
            process.sendFailedResponse(ex);
        }
    }

    validateHeader(next: () => void): void {
        if (Utils.notNull(this.actionDefinition.permission) && this.actionDefinition.permission != Permission.ANY) {
            var authHeader = this.req.get(Constants.AUTH);
            if (Utils.notEmpty(authHeader)) {
                this.session = new Crypt().decryptSession(authHeader);
                if (Utils.notNull(this.session) && Utils.notEmpty(this.session.userId)) {
                    if (Session.isExpired(this.session)) {
                        var message = Session.getExpirationMessage(this.session);
                        this.findAndSendUserLoginResponse(AuthBehaviors.sessionExpired, message);
                    } else {
                        next();
                    }
                } else {
                    var message = "Session is null or empty";
                    this.findAndSendUserLoginResponse(AuthBehaviors.noSessionInHeader, message);
                }
            } else {
                var message = "Authorization header is null or empty";
                this.findAndSendUserLoginResponse(AuthBehaviors.noAuthHeader, message);
            }
        } else {
            this.callback(this);
        }
    }

    validateSession(): void {
        var process = this;
        process.validateHeader(
            function () {
                process.findUserAndRoles(function () {
                    var module = process.apiDefinition.module;
                    var permission = process.actionDefinition.permission;
                    var userAccesses = process.user.privateUserDetails.accesses;

                    if (Session.hasAccess(module, permission, userAccesses)) {
                        process.callback(process);
                    } else if (Session.hasRoleAccess(module, permission, process.roles)) {
                        process.callback(process);
                    } else {
                        var message = "User need '" + permission + "' permission for this operation on module: " + module;
                        this.findAndSendUserLoginResponse(AuthBehaviors.noRights, message);
                    }
                });
            }
        );
    }

    findUserAndRoles(next: ()=>void): void {
        var process = this;
        var responses = 0;
        Database.dal.user.findByUserId(
            process.session.userId,
            function () {
                responses++;
                var message = "User with provided session not found";
                this.findAndSendUserLoginResponse(AuthBehaviors.noSessionInHeader, message);
                if (responses == 2) next();
            },
            function (user:IUser) {
                responses++;
                process.user = user;
                if (responses == 2) next();
            }
        );
        Database.dal.role.findByUserId(
            process.session.userId,
            function () {
                responses++;
                process.roles = [];
                if (responses == 2) next();
            },
            function (roles: IRole[]) {
                responses++;
                process.roles = roles;
                if (responses == 2) next();
            }
        );
    }

    sendFailedResponse(error: any, description: string = null, responseData: any = null) {
        if (error instanceof Exception) {
            var exception = <Exception>error;
            var errorDesc = Utils.notNull(exception.description) ? exception.description : null;
            var fullDesc = Utils.notEmpty(description) ? description : errorDesc;
            var fullData = Utils.notNull(responseData) ? responseData : exception.data;
            this.sendResponse(exception.content, fullDesc, fullData);
        } else if (error instanceof Error) {
            var behavior = this.apiDefinition.findActionBehavior(this.action, ServerBehaviors.failed);
            var errorMessage = (<Error>error).message;
            var fullDescription = Utils.notEmpty(description) ? description + ' ' + errorMessage : errorMessage;
            this.sendResponse(behavior, fullDescription, responseData);
        } else {
            var behavior = this.apiDefinition.findActionBehavior(this.action, ServerBehaviors.failed);
            var errorMessage:string = Utils.notNull(error) ? error.toString() : null;
            var fullDescription = Utils.notEmpty(description) ? description + ' ' + errorMessage : errorMessage;
            this.sendResponse(behavior, fullDescription, responseData);
        }
    }

    sendSuccessResponse(description: string = null, responseData: any = null) {
        var behavior = this.apiDefinition.findActionBehavior(this.action, ServerBehaviors.success);
        this.sendResponse(behavior, description, responseData);
    }

    sendNotFoundResponse(description: string) {
        this.sendResponse(BaseApiDefinition.notFoundBehavior, description);
    }

    findAndSendUserLoginResponse(behavior: string, description?: string, responseData?: any) {
        this.findAndSendResponse(new AuthApiDefinition(), AuthActions.login, behavior, description, responseData);
    }

    findAndSendResponse(apiDefinition: ApiDefinition, action: string, behavior: string, description?: string, responseData?: any) {
        var definition = apiDefinition.findActionBehavior(action, behavior);
        this.sendResponse(definition, description, responseData);
    }

    sendResponse(responseDefinition: ApiResponseBehaviorDefinition, description?: string, responseData?: any) {
        var data = this.getResponseData(responseDefinition, description, responseData);
        this.builder.sendResponse(data, this.res);
    }

    getResponseData(responseDefinition: ApiResponseBehaviorDefinition, description?: string, responseData?: any): ResponseData {
        var data = new ResponseData(this.req.body, responseDefinition);
        data.description = description;
        data.responseData = responseData;
        if (this.session != null) {
            data.userId = this.session.userId;
        }
        return data;
    }

    getUserId(): string {
        return this.session.userId;
    }

    getUser(): IUser {
        Validator.validateObject(this.user, 'User object')
        return this.user;
    }

    getPathId(): string {
        return this.req.params.id;
    }

    getPathEmail(): string {
        return this.req.params.email;
    }

    getPathUsername(): string {
        return this.req.params.username;
    }

    getPathUserId(): string {
        return this.req.params.userId;
    }

    getPathValidationId(): string {
        return this.req.params.validationId;
    }

    getAuthHeader(): string {
        return this.req.get(Constants.AUTH);
    }

    getBody() {
        if (Utils.notNull(this.req.body)) {
            return this.req.body;
        } else {
            return {};
        }
    }
}