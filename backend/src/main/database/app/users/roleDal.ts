import {BaseDal} from "../core/baseDal";
import {Role, IRole} from "./model/role";

export class RoleDal extends BaseDal{

    create(role: IRole, failed: (err: any) => void, success: () => void): void {
        this.createEntry(Role, role, failed, success);
    }

    save(role: any, failed: (err: any) => void, success: () => void): void {
        this.saveEntry(role, failed, success);
    }

    findByRoleId(roleId: string, failed: (err: any) => void, success: (role: IRole) => void): void {
        var filter = { "roleDetails.roleId": roleId };
        this.findEntry(Role, filter, failed, success, 'Role');
    }

    findByUserId(userId: string, failed: (err: any) => void, success: (roles: IRole[]) => void): void {
        var filter = { "roleDetails.userIds": userId };
        this.findEntry(Role, filter, failed, success, 'Role');
    }

    findByFilter(filter: any, failed: (err: any) => void, success: (roles: IRole[]) => void): void {
        this.findEntryList(Role, filter, failed, success, 'Role');
    }

    removeByRoleId(roleId: string, failed: (err: any) => void, success: () => void): void {
        var filter = { "roleDetails.roleId": roleId };
        this.removeEntry(Role, filter, failed, success);
    }

    removeByFilter(filter: any, failed: (err: any) => void, success: () => void): void {
        this.removeEntry(Role, filter, failed, success);
    }
}