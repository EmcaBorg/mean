import {Component} from "../../../../common-services/app/rest/component";
import {AuthService, LoginResponse, LoginRequest} from "../../../../common-services/app/services/auth/authService";
import {Utils} from "../../../../../common/app/utils";
import {IRoleDetails} from "../../../../../database/app/users/model/role";
import {Logger} from "log4js";

export class AuthComponent implements Component {
    log:Logger = Utils.getLogger('AuthComponent');
    authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    login(req: LoginRequest, failed: (err)=>void, success: (loginResponse: LoginResponse) => void): void {
        try {
            this.authService.login(req, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    createRole(request: IRoleDetails, failed: (err: any)=> void, success: (res?) => void) {
        try {
            this.authService.createRole(request, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    updateRole(request: IRoleDetails, failed: (err: any)=> void, success: (res?) => void) {
        try {
            this.authService.updateRole(request, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    getRole(roleId: string, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            this.authService.findRoleByRoleId(roleId, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    searchRoles(query: any, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            this.authService.findRolesByFilter(query, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    deleteRole(roleId: string, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            this.authService.removeRoleByRoleId(roleId, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    deleteRoles(query: any, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            this.authService.removeRolesByFilter(query, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }
/*
    changePassword(req: ChangePasswordRequest, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            var service = this;
            ChangePasswordValidator.validateRequest(req);
            if (Utils.notEmpty(req.username)) {
                this.userService.findByUsername(req.username, function (err: any, user: IUser) {
                    service.changePasswordCallback(err, user, req, callback);
                });
            } else {
                this.userService.findByEmail(req.email, function (err: any, user: IUser) {
                    service.changePasswordCallback(err, user, req, callback);
                });
            }
        } catch (ex) {
            callback(ex);
        }
    }

    changeUserPassword(req: ChangeUserPasswordRequest, failed: (err: any)=> void, success: (res?) => void): void {
        try {
            var component = this;
            ChangePasswordValidator.validateUserRequest(req);
            this.userService.findByEmail(req.email, function (err: any, user: IUser) {
                component.changeUserPasswordCallback(err, user, req, function (err) {
                    if (err) {
                        callback(err, {});
                    } else {
                        callback(false, { userType: user.privateUserDetails.userType });
                    }
                });
            });
        } catch (ex) {
            callback(ex, {});
        }
    }

    changePasswordCallback(err: any, user: IUser, req: ChangePasswordRequest, callback: (err: any) => void) {
        var crypt = new Crypt();
        if (!err) {
            if (crypt.comparePassword(req.oldPassword, user.privateUserDetails.password)) {
                user.privateUserDetails.password = crypt.hashPassword(req.newPassword);
                (<IUserDocument>user).markModified("private");
                var us = new UserService();
                var ns = new NotificationService();
                us.save(user, function (err: any) {
                    if (!err) {
                        var userDetails = user.publicUserDetails;
                        var fullName = Utils.fullName(userDetails);
                        var language = userDetails.language;
                        var email = userDetails.email;
                        ns.sendChangePasswordConfirmation(fullName, email, language);
                    }
                    callback(err);
                });
            } else {
                callback("Wrong old password");
            }
        } else {
            callback(err);
        }
    }

    changeUserPasswordCallback(err: any, user: IUser, req: ChangeUserPasswordRequest, callback: (err: any) => void) {
        var crypt = new Crypt();
        if (!err) {
            var secret = user.privateUserDetails.secret;
            var duration = Constants.RESET_PASSWORD_IDENTIFICATION_DURATION_MS;
            if (req.identificationId == secret.identificationId) {
                if (secret.identificationTime + duration > Utils.getTime()) {
                    user.privateUserDetails.password = crypt.hashPassword(req.newPassword);
                    user.privateUserDetails.secret = new Secret(user.privateUserDetails.secret.validated);
                    (<IUserDocument>user).markModified("private");
                    var us = new UserService();
                    var ns = new NotificationService();
                    us.save(user, function (err: any) {
                        if (!err) {
                            var userDetails = user.publicUserDetails;
                            var fullName = Utils.fullName(userDetails);
                            var language = userDetails.language;
                            var email = userDetails.email;
                            ns.sendChangePasswordConfirmation(fullName, email, language);
                        }
                        callback(err);
                    });
                } else {
                    callback("Identification id expired");
                }
            } else {
                callback("Wrong identification id");
            }
        } else {
            callback(err);
        }
    }

    sendUserIdentification(req: IdentificationRequest, callback: (err: any) => void) {
        try {
            var us = this.userService;
            IdentificationValidator.validateEmail(req);
            us.findByEmail(req.email, function (err: any, user: IUser) {
                if (!err) {
                    var secret = user.privateUserDetails.secret;
                    var language = user.publicUserDetails.language;
                    if (secret.securityQuestionEnabled) {
                        IdentificationValidator.validateRequest(req, callback);
                        var rightAnswer = new Crypt().comparePassword(req.answerOnQuestion, secret.answerOnQuestion);
                        if (secret.questionId == req.questionId && rightAnswer) {
                            secret.identificationId = Secret.generateId();
                            secret.identificationTime = Utils.getTime();
                            (<IUserDocument>user).markModified("private");
                            us.save(user, function (err: any) {
                                var userDetails = user.publicUserDetails;
                                var id = secret.identificationId;
                                var fullName = Utils.fullName(userDetails);
                                new NotificationService().sendUserIdentification(fullName, userDetails.email, id, language);
                                callback(false);
                            })
                        } else {
                            callback("Wrong combination of question and answer");
                        }
                    } else {
                        secret.identificationId = Secret.generateId();
                        secret.identificationTime = Utils.getTime();
                        (<IUserDocument>user).markModified("private");
                        us.save(user, function (err: any) {
                            var userDetails = user.publicUserDetails;
                            var id = secret.identificationId;
                            var fullName = Utils.fullName(userDetails);
                            new NotificationService().sendUserIdentification(fullName, userDetails.email, id, language);
                            callback(false);
                        })
                    }
                } else {
                    callback(err);
                }
            });
        } catch (ex) {
            callback(ex);
        }
    }*/

    logout(header: string, failed: (err)=>void, success: () => void): void {
        try {
            failed("");
        } catch (ex) {
            failed(ex);
        }
    }
}