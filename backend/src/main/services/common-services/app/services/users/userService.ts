import {Service} from '../../rest/service';
import {NotificationService} from '../notifications/notificationService';
import {Database} from "../../../../../database/database";
import {Utils} from "../../../../../common/app/utils";
import {UserDal} from "../../../../../database/app/users/usersDal";
import {Logger} from "log4js";
import {ApiResponseBehaviorDefinition} from "../../../../../common/app/api/apiDefinition";
import {AccountApiDefinition} from "../../../../../common/app/api/definitions/accountApiDefinition";
import {IUser, IPublicUserDetails} from "../../../../../database/app/users/model/user";
import {AccountService} from "./accountService";

var ns: NotificationService;

export class UserService implements Service {

    log:Logger = Utils.getLogger('UserService');
    userDal: UserDal = Database.dal.user;

    constructor() {
        ns = new NotificationService();
    }

    getActionBehavior(action:string, behavior:string): ApiResponseBehaviorDefinition {
        var api = new AccountApiDefinition();
        return api.findActionBehavior(action, behavior);
    }

    saveUser(user: IUser, failed: (err)=>void, success: () => void) {
        this.userDal.save(user, failed, success);
    }

    updateUser(newDetails: IPublicUserDetails, userId: string, failed: (err)=>void, success: () => void) {
        var userService = this;
        var accountService = new AccountService();
        userService.findByUserId(userId, failed, function (user: IUser) {
            try {
                var newEmail = newDetails.email != user.publicUserDetails.email;
                var userModel: IUser = accountService.updateUserModel(user, newDetails, newEmail);
                var ignore = Utils.ignore();
                userService.userDal.save(userModel, failed, function () {
                    if (newEmail) {
                        var fullName = Utils.fullName(newDetails);
                        var username = newDetails.username;
                        var email = newDetails.email;
                        var language = newDetails.language;
                        var id = userModel.privateUserDetails.secret.validationId;
                        ns.sendChangeEmailValidation(fullName, email, username, id, language, ignore, ignore);
                    }
                    success();
                });
            } catch (err) {
                failed(err);
            }
        });
    }

    findByUserId(userId: string, failed: (err)=>void, success: (user: IUser) => void): void {
        this.userDal.findByUserId(userId, failed, success);
    }

    findByUsername(username: string, failed: (err)=>void, success: (user: IUser) => void): void {
        this.userDal.findByUsername(username, failed, success);
    }

    findByEmail(email: string, failed: (err)=>void, success: () => void): void {
        this.userDal.findByEmail(email, failed, success);
    }

    findByFilter(request: any, failed: (err)=>void, success: (users: IUser[], totalCount: number) => void): void {
        this.userDal.findByFilter(request, failed, success);
    }

    removeByUserId(userId: string, failed: (err)=>void, success: () => void): void {
        this.userDal.removeByUserId(userId, failed, success);
    }

    removeByUserIds(userIds: string[], failed: (err)=>void, success: () => void): void {
        this.userDal.removeByUserIds(userIds, failed, success);
    }
}