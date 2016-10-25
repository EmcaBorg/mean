import {Component} from "../../../../common-services/app/rest/component";
import {UserService} from "../../../../common-services/app/services/users/userService";
import {Logger} from "log4js";
import {Utils} from "../../../../../common/app/utils";
import {IUser} from "../../../../../database/app/users/model/user";
import {Validator} from "../../../../common-services/app/validator/validator";
import {DeleteRequest} from "./requests";

export class UserComponent implements Component {
    log:Logger = Utils.getLogger('UserComponent');
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    updateUser(user: IUser, failed: (err: any)=> void, success: ()=> void) {
        try {
            Validator.validateString(user.userId, "User id");
            this.userService.updateUser(user.publicUserDetails, user.userId, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    deleteUser(request: DeleteRequest, failed: (err: any)=> void, success: ()=> void) {
        try {
            var userService = this.userService;
            Validator.validateString(request.userId, 'User id');
            userService.removeByUserId(request.userId, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    deleteUsers(request: DeleteRequest, failed: (err: any)=> void, success: ()=> void) {
        try {
            var userService = this.userService;
            Validator.validateObject(request.userIds, 'User ids list');
            userService.removeByUserIds(request.userIds, failed, success);
        } catch (ex) {
            failed(ex);
        }
    }

    findUserByUserId(userId: string, failed: (err: any)=> void, success: (res: any)=> void) {
        try {
            var userService = this.userService;
            Validator.validateObject(userId, 'User id');
            userService.findByUserId(userId, failed, function (user: IUser) {
                success(UserComponent.userToDto(user));
            });
        } catch (ex) {
            failed(ex);
        }
    }

    findUserByUsername(username: string, failed: (err: any)=> void, success: (res: any)=> void) {
        try {
            var userService = this.userService;
            Validator.validateObject(username, 'Username');
            userService.findByUsername(username, failed, function (user: IUser) {
                success(UserComponent.userToDto(user));
            });
        } catch (ex) {
            failed(ex);
        }
    }

    searchUsersByFilter(request: any, failed: (err: any)=> void, success: (res: any)=> void) {
        try {
            var userService = this.userService;
            userService.findByFilter(request, failed, function (users: IUser[]) {
                success(UserComponent.usersToDtos(users));
            });
        } catch (ex) {
            failed(ex);
        }
    }

    static usersToDtos (users: IUser[]): any {
        var response = [];
        users.forEach(function (item: IUser) {
            response.push(UserComponent.userToDto(item));
        });
        return response;
    }

    static userToDto (user: IUser): any {
        return {
            publicUserDetails: user.publicUserDetails,
                userId: user.userId
        }
    }
}