import {Utils} from "../../../../common/app/utils";
import {Constants} from "../../../../common/config/constants/constants";
import {Access} from "../../../../common/app/security/role";
import {IRole} from "../../../../database/app/users/model/role";

export class Session {
    expirationTime: number = Utils.getTime() + Constants.SESSION_DURATION_MS;
    createTime: number = Utils.getTime();

    constructor(public userId: string) {}

    static isExpired(session: Session): boolean {
        return session.expirationTime < Utils.getTime();
    }

    static getExpirationMessage(session: Session): string {
        var difference = Utils.getTime() - session.expirationTime;
        if (difference < 3600000) {
            return "Session expired " + difference + " ms ago."
        } else {
            return "Session expired " + difference / 3600000.0 +  "h ago."
        }
    }

    static hasAccess(module: string, permission: string, accesses: Access[]): boolean {
        if (Utils.isNull(accesses)) {
            return false;
        } else {
            var response = false;
            accesses.forEach(function (access:Access) {
                if (access.module == module && access.permissions.indexOf(permission) >= 0) {
                    response = true;
                    return;
                }
            });
            return response;
        }
    }

    static hasRoleAccess(module: string, permission: string, roles: IRole[]): boolean {
        if (Utils.isNull(roles)) {
            return false;
        } else {
            roles.forEach(function (role:IRole) {
                role.roleDetails.accesses.forEach(function (access:Access) {
                    if (access.module == module && access.permissions.indexOf(permission) >= 0) {
                        return true;
                    }
                });
            });
            return false;
        }
    }
}