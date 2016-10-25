import {Validator} from "../../../../common-services/app/validator/validator";
import {Utils} from "../../../../../common/app/utils";

export interface ChangePasswordRequest {
    username: string;
    email: string;
    oldPassword: string;
    newPassword: string;
}

export interface ChangeUserPasswordRequest {
    email: string;
    identificationId: string;
    newPassword: string;
}

export class ChangePasswordValidator {
    static validateRequest(request: ChangePasswordRequest): void {
        Validator.validatePassword(request.oldPassword, "Old password");
        Validator.validatePassword(request.newPassword, "New password");
        if (Utils.isEmpty(request.email) && Utils.isEmpty(request.username)) {
            throw new Error("Username or email are required");
        } else {
            if (Utils.isEmpty(request.email)) {
                Validator.validateUsername(request.username);
            } else {
                Validator.validateEmail(request.email);
            }
        }
    }
    static validateUserRequest(request: ChangeUserPasswordRequest): void {
        Validator.validateEmail(request.email);
        Validator.validatePassword(request.newPassword);
        Validator.validateString(request.identificationId, "Identification id");
    }
}