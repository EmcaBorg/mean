import {User, IUserDocument} from "./model/user";
import {IUser} from "./model/user";
import {BaseDal} from "../core/baseDal";

export class UserDal extends BaseDal{

    create(user: IUser, failed: (err: any) => void, success: () => void): void {
        this.createEntry(User, user, failed, success);
    }

    save(user: any, failed: (err: any) => void, success: () => void): void {
        (<IUserDocument>user).markModified("publicUserDetails");
        (<IUserDocument>user).markModified("privateUserDetails");
        this.saveEntry(user, failed, success);
    }

    findByUsername(username: string, failed: (err: any) => void, success: (users: IUser) => void): void {
        var filter = { "publicUserDetails.username": username };
        this.findEntry(User, filter, failed, success, 'User');
    }

    findByEmail(email: string, failed: (err: any) => void, success: (users: IUser) => void): void {
        var filter = { "publicUserDetails.email": email };
        this.findEntry(User, filter, failed, success, 'User');
    }

    findByUserId(userId: string, failed: (err: any) => void, success: (user: IUser) => void): void {
        var filter = { "userId": userId };
        this.findEntry(User, filter, failed, success, 'User');
    }

    findByFilter(filter: any, failed: (err: any) => void, success: (users: IUser[], totalCount: number) => void): void {
        this.findEntryList(User, filter, failed, success, 'User');
    }

    removeByUserId(userId: string, failed: (err: any) => void, success: () => void): void {
        var filter = { "userId": userId };
        this.removeEntry(User, filter, failed, success);
    }

    removeByUserIds(userIds: string[], failed: (err: any) => void, success: () => void): void {
        var filter = { "$in": userIds };
        this.removeByFilter(filter, failed, success);
    }

    removeByFilter(filter: any, failed: (err: any) => void, success: () => void): void {
        this.removeEntry(User, filter, failed, success);
    }
}