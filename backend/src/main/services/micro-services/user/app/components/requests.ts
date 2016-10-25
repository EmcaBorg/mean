import {UserType} from "../../../../../database/app/users/model/user";

export class UserTypeRequest {
    type: UserType;
    userId: string;
}

export interface DeleteRequest {
    password: string;
    userId: string;
    userIds: string[];
}
export interface UpdateImageRequest {
    image: string;
}

export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}