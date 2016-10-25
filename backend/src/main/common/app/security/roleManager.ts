import {Module} from "./module";
import {Permission} from "./permission";
import {StaticRole} from "./staticRole";
import {Access} from "./role";

export class RoleManager {

    static getDefaultUserPermissions(role: StaticRole): Access[] {
        var accesses: Access[] = [];
        switch (role) {
            case StaticRole.USER: {
                accesses.push(new Access(Module.AUTH, [Permission.LOGIN, Permission.LOGOUT]));
                accesses.push(new Access(Module.ACCOUNT, [Permission.READ, Permission.UPDATE, Permission.DELETE]));
                break;
            }
            case StaticRole.ADMIN: {
                accesses = RoleManager.getAllPermissions();
                break;
            }
        }
        return accesses;
    }

    static getAllPermissions(): Access[] {
        var accesses: Access[] = [];
        accesses.push(new Access(Module.AUTH, [Permission.LOGIN, Permission.LOGOUT]));
        accesses.push(new Access(Module.ACCOUNT, [Permission.READ, Permission.UPDATE, Permission.DELETE]));
        accesses.push(new Access(Module.USERS, [Permission.READ, Permission.UPDATE, Permission.DELETE]));
        return accesses;
    }
}