import {BaseApiDefinition, ApiActionDefinition, ApiMethods} from "../apiDefinition";
import {Module} from "../../security/module";
import {Permission} from "../../security/permission";
import {ServerBehaviors} from "./serverApiDefinition";
import {Environments} from "../../../config/environments/environments";
import {Environment} from "../../../config/endpoints/endpoint";
export type AuthAction = 'login' | 'logout' | 'createRole' | 'updateRole' | 'deleteRole' | 'deleteRoles' | 'getRole' | 'searchRoles';
export type AuthBehavior = 'success' | 'failed' | 'notFound' | 'sessionExpired' | 'noRights' | 'noAuthHeader' | 'wrongUser' | 'noSessionInHeader' | 'accountNotValidated';

export class AuthActions {
    static login: AuthAction = 'login';
    static logout: AuthAction = 'logout';
    static createRole: AuthAction = 'createRole';
    static updateRole: AuthAction = 'updateRole';
    static deleteRole: AuthAction = 'deleteRole';
    static deleteRoles: AuthAction = 'deleteRoles';
    static getRole: AuthAction = 'getRole';
    static searchRoles: AuthAction = 'searchRoles';
}
export class AuthBehaviors extends ServerBehaviors {
    static sessionExpired: AuthBehavior = 'sessionExpired';
    static noRights: AuthBehavior = 'noRights';
    static noAuthHeader: AuthBehavior = 'noAuthHeader';
    static noSessionInHeader: AuthBehavior = 'noSessionInHeader';
    static wrongUser: AuthBehavior = 'wrongUser';
    static accountNotValidated: AuthBehavior = 'accountNotValidated';
}

export class AuthApiDefinition extends BaseApiDefinition {
    basePath: string = 'auth';
    module: string = Module.AUTH;
    environment: Environment = Environments.auth;
    actions: ApiActionDefinition[] = [
        {
            action: AuthActions.login,
            permission: Permission.ANY,
            method: ApiMethods.POST,
            path: 'login',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-AUTH-1",
                    message: "Authorization failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.sessionExpired,
                    status: 401,
                    code: "F-AUTH-1-1",
                    message: "Session expired",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.noRights,
                    status: 401,
                    code: "F-AUTH-1-2",
                    message: "No rights for this operation",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.noAuthHeader,
                    status: 401,
                    code: "F-AUTH-1-3",
                    message: "Wrong authorisation header",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.noSessionInHeader,
                    status: 401,
                    code: "F-AUTH-1-4",
                    message: "Wrong authorisation session",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.accountNotValidated,
                    status: 401,
                    code: "F-AUTH-1-5",
                    message: "Account not validated, please validate your account before login",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.wrongUser,
                    status: 401,
                    code: "F-AUTH-1-6",
                    message: "Wrong user session",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-AUTH-1",
                    message: "Login success",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.logout,
            permission: Permission.LOGOUT,
            method: ApiMethods.POST,
            path: 'logout',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-AUTH-2",
                    message: "Logout failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-AUTH-2",
                    message: "Logout success",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.createRole,
            permission: Permission.CREATE,
            method: ApiMethods.POST,
            path: 'roles',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-1",
                    message: "Role createAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-1",
                    message: "Role successfully created",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.updateRole,
            permission: Permission.UPDATE,
            method: ApiMethods.PUT,
            path: 'roles',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-2",
                    message: "Role updateAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-2",
                    message: "Role successfully updated",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.deleteRole,
            permission: Permission.DELETE,
            method: ApiMethods.DELETE,
            path: 'roles/:id',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-3",
                    message: "Role deleteAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-3",
                    message: "Role successfully deleted",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.deleteRoles,
            permission: Permission.DELETE,
            method: ApiMethods.POST,
            path: 'roles/remove',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-3",
                    message: "Roles deleteAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-3",
                    message: "Roles successfully deleted",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.getRole,
            permission: Permission.READ,
            method: ApiMethods.GET,
            path: 'roles/:id',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-4",
                    message: "Role not found",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-4",
                    message: "Role successfully found",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AuthActions.searchRoles,
            permission: Permission.READ,
            method: ApiMethods.POST,
            path: 'roles/search',
            responses: [
                {
                    behavior: AuthBehaviors.failed,
                    status: 401,
                    code: "F-ROLE-5",
                    message: "Roles not found",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AuthBehaviors.success,
                    status: 200,
                    code: "S-ROLE-5",
                    message: "Roles successfully found",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        }
    ];
}