import {Crypt} from '../../security/crypt';
import {Validator} from '../../validator/validator';
import {Service} from '../../rest/service';
import {ISecret, IUser} from "../../../../../database/app/users/model/user";
import {Utils} from "../../../../../common/app/utils";
import {Database} from "../../../../../database/database";
import {
    AuthBehaviors, AuthActions,
    AuthApiDefinition
} from "../../../../../common/app/api/definitions/authApiDefinition";
import {Session} from "../../security/session";
import {RoleDal} from "../../../../../database/app/users/roleDal";
import {UserDal} from "../../../../../database/app/users/usersDal";
import {IRoleDetails, IRole} from "../../../../../database/app/users/model/role";
import {Logger} from "log4js";
import {ApiResponseBehaviorDefinition} from "../../../../../common/app/api/apiDefinition";
import {Exception} from "../../../../../common/app/exception/exception";
import {Module} from "../../../../../common/app/security/module";
import {Permission} from "../../../../../common/app/security/permission";

var security = new Crypt();
var authService: AuthService;

export interface LoginRequest {
    username: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    session: Session;
    responseData: any;
}

export class AuthService implements Service {
    log:Logger = Utils.getLogger('AuthService');
    security: Crypt;
    roleDal: RoleDal = Database.dal.role;
    userDal: UserDal = Database.dal.user;

    constructor() {
        security = new Crypt();
        authService = this;
    }

    getActionBehavior(action:string, behavior:string): ApiResponseBehaviorDefinition {
        var api = new AuthApiDefinition();
        return api.findActionBehavior(action, behavior);
    }

    login(req: LoginRequest, failed: (err)=>void, success: (loginResponse: LoginResponse) => void): void {
        try {
            authService.passwordLogin(req.username, req.email, req.password, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    passwordLogin(username: string, email: string, password: string, failed: (err)=>void, success: (loginResponse: LoginResponse) => void): void {
        var failedBehavior = authService.getActionBehavior(AuthActions.login, AuthBehaviors.failed);
        if (Utils.isEmpty(password)) {
            failed(new Exception(failedBehavior, 'User password not defined.'));
        } else{
            if (Utils.isEmpty(email)) {
                if (Utils.isEmpty(username)) {
                    failed(new Exception(failedBehavior, 'Username or email should be defined.'));
                } else {
                    authService.userDal.findByUsername(username, failed, function (user:IUser) {
                        authService.passwordLoginVerification(password, user, failed, success);
                    })
                }
            } else {
                authService.userDal.findByEmail(email, failed, function (user:IUser) {
                    authService.passwordLoginVerification(password, user, failed, success);
                })
            }
        }
    }

    passwordLoginVerification(password: string, user: IUser, failed: (err)=>void, success: (loginResponse: LoginResponse) => void) {
        var failedBehavior = authService.getActionBehavior(AuthActions.login, AuthBehaviors.failed);
        try {
            if (Utils.isNull(user) || !security.comparePassword(password, user.privateUserDetails.password)) {
                failed(new Exception(failedBehavior, 'Wrong user password.'));
            } else {
                var secret = <ISecret>user.privateUserDetails.secret;
                if (!secret.validated) {
                    var behavior = authService.getActionBehavior(AuthActions.login, AuthBehaviors.accountNotValidated);
                    failed(new Exception(behavior, 'Please validate account.'));
                } else {
                    if (Session.hasAccess(Module.AUTH, Permission.LOGIN, user.privateUserDetails.accesses)) {
                        success({ session: security.createSession(user.userId), responseData: null });
                    } else {
                        failed(new Exception(failedBehavior, 'User need login permission.'));
                    }
                }
            }
        } catch (err) {
            failed(new Exception(failedBehavior, err.message));
        }
    }

    createRole(data: IRoleDetails, failed: (err: any)=> void, success: ()=> void) {
        try {
            authService.roleDal.create(authService.createRoleModel(data), failed, success);
        } catch (err) {
            failed(err);
        }
    }

    updateRole(data: IRoleDetails, failed: (err: any)=> void, success: ()=> void) {
        try {
            authService.roleDal.findByRoleId(data.roleId, failed, function (role: IRole) {
                var model = authService.updateRoleModel(role, data);
                authService.roleDal.save(model, failed, success);
            });
        } catch (ex) {
            failed(ex);
        }
    }

    findRoleByRoleId(roleId: string, failed: (err: any)=> void, success: (roles: IRole)=> void) {
        try {
            authService.roleDal.findByRoleId(roleId, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    findRolesByFilter(query: any, failed: (err: any)=> void, success: (roles: IRole[])=> void) {
        try {
            authService.roleDal.findByFilter(query, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    findRolesByUserId(userId: string, failed: (err: any)=> void, success: (roles: IRole[])=> void) {
        try {
            authService.roleDal.findByUserId(userId, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    removeRoleByRoleId(roleId: string, failed: (err: any)=> void, success: ()=> void) {
        try {
            authService.roleDal.removeByRoleId(roleId, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    removeRolesByFilter(query: any, failed: (err: any)=> void, success: ()=> void) {
        try {
            authService.roleDal.removeByRoleId(query, failed, success);
        } catch (err) {
            failed(err);
        }
    }

    private updateRoleModel(role: IRole, data: IRoleDetails) {
        Validator.validateObject(data);
        Validator.validateString(data.name, "Role name");
        Validator.validateObject(data.accesses);
        Validator.validateObject(data.userIds);
        Validator.validateString(data.roleId, "Role id");

        role.roleDetails = data;
        return role;
    }

    private createRoleModel(data: IRoleDetails) {
        Validator.validateObject(data);
        Validator.validateString(data.name, "Role name");
        Validator.validateObject(data.accesses);
        Validator.validateObject(data.userIds);

        return <IRole>{ roleDetails: data };
    }
}