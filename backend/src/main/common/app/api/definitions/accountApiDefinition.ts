import {Module} from "../../security/module";
import {ApiActionDefinition, BaseApiDefinition, ApiMethods} from "../apiDefinition";
import {ServerBehaviors} from "./serverApiDefinition";
import {Permission} from "../../security/permission";
import {Environment} from "../../../config/endpoints/endpoint";
import {Environments} from "../../../config/environments/environments";

export type AccountAction = 'createAccount' | 'updateAccount' | 'deleteAccount' | 'changeAccountPassword' | 'updateAccountImage' | 'sendValidationId' | 'usernameAvailability' | 'emailAvailability' | 'validateAccount';
export type AccountBehavior = 'success' | 'failed' | 'notFound' | 'validationFailed' | 'wrongOldPassword';

export class AccountActions {
    static createAccount: AccountAction = 'createAccount';
    static updateAccount: AccountAction = 'updateAccount';
    static deleteAccount: AccountAction = 'deleteAccount';
    static changeAccountPassword: AccountAction = 'changeAccountPassword';
    static updateAccountImage: AccountAction = 'updateAccountImage';
    static sendValidationId: AccountAction = 'sendValidationId';
    static usernameAvailability: AccountAction = 'usernameAvailability';
    static emailAvailability: AccountAction = 'emailAvailability';
    static validateAccount: AccountAction = 'validateAccount';
}
export class AccountBehaviors extends ServerBehaviors {
    static validationFailed: AccountBehavior = 'validationFailed';
    static wrongOldPassword: AccountBehavior = 'wrongOldPassword';
}


export class AccountApiDefinition extends BaseApiDefinition {
    basePath: string = 'account';
    module: string = Module.ACCOUNT;
    environment: Environment = Environments.user;
    actions: ApiActionDefinition[] = [
        {
            action: AccountActions.createAccount,
            method: ApiMethods.POST,
            permission: Permission.ANY,
            path: '',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-1",
                    message: "Account createAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.validationFailed,
                    status: 400,
                    code: "F-ACCOUNT-1-1",
                    message: "Validation failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-1",
                    message: "Account created successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.updateAccount,
            method: ApiMethods.PUT,
            permission: Permission.UPDATE,
            path: '',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-2-1",
                    message: "Account updateAccount failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.validationFailed,
                    status: 400,
                    code: "F-ACCOUNT-2-2",
                    message: "Account validation failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-2-1",
                    message: "Account updated successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.deleteAccount,
            method: ApiMethods.POST,
            permission: Permission.DELETE,
            path: 'remove',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-3",
                    message: "Failed to delete account account",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-3",
                    message: "Account deleted successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.validateAccount,
            method: ApiMethods.GET,
            permission: Permission.UPDATE,
            path: 'validate/:userId/:validationId',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-4",
                    message: "Failed to validate account",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-4",
                    message: "User account successfully validated",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.sendValidationId,
            method: ApiMethods.GET,
            permission: Permission.ANY,
            path: 'send/validationId/:email',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-5",
                    message: "Failed to send validation id account",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-5",
                    message: "Validation id successfully sent",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.changeAccountPassword,
            method: ApiMethods.POST,
            permission: Permission.UPDATE,
            path: 'change/password',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-6",
                    message: "Failed to change account password",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.wrongOldPassword,
                    status: 400,
                    code: "F-ACCOUNT-6-1",
                    message: "Failed to change account password",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-6",
                    message: "User account password successfully changed",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.usernameAvailability,
            method: ApiMethods.GET,
            permission: Permission.ANY,
            path: 'availability/username/:username',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-7",
                    message: "Failed to check username availability",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-7",
                    message: "Username availability successfully changed",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.emailAvailability,
            method: ApiMethods.GET,
            permission: Permission.ANY,
            path: 'availability/email/:email',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-8",
                    message: "Failed to check email availability",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-8",
                    message: "Email availability successfully changed",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: AccountActions.updateAccountImage,
            method: ApiMethods.POST,
            permission: Permission.UPDATE,
            path: 'image',
            responses: [
                {
                    behavior: AccountBehaviors.failed,
                    status: 400,
                    code: "F-ACCOUNT-9",
                    message: "Failed to update image",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: AccountBehaviors.success,
                    status: 200,
                    code: "S-ACCOUNT-9",
                    message: "Image successfully updated",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        }
    ];
}