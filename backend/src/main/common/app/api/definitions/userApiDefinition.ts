import {Module} from "../../security/module";
import {ApiActionDefinition, BaseApiDefinition, ApiMethods} from "../apiDefinition";
import {ServerBehaviors} from "./serverApiDefinition";
import {Permission} from "../../security/permission";
import {Environments} from "../../../config/environments/environments";
import {Environment} from "../../../config/endpoints/endpoint";

export type UserAction = 'findUserByUserId' | 'findUserByUsername' | 'searchUsersByFilter' | 'updateUser' | 'deleteUser' | 'deleteUsers';

export class UserActions {
    static findUserByUserId: UserAction = 'findUserByUserId';
    static findUserByUsername: UserAction = 'findUserByUsername';
    static searchUsersByFilter: UserAction = 'searchUsersByFilter';
    static updateUser: UserAction = 'updateUser';
    static deleteUser: UserAction = 'deleteUser';
    static deleteUsers: UserAction = 'deleteUsers';
}
export class UserBehaviors extends ServerBehaviors {
}


export class UserApiDefinition extends BaseApiDefinition{
    basePath: string = 'users';
    module: string = Module.USERS;
    environment: Environment = Environments.user;
    actions: ApiActionDefinition[] = [
        {
            action: UserActions.updateUser,
            method: ApiMethods.PUT,
            permission: Permission.UPDATE,
            path: '',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-1",
                    message: "User update failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-1",
                    message: "User updated successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: UserActions.deleteUser,
            method: ApiMethods.POST,
            permission: Permission.DELETE,
            path: 'remove',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-2",
                    message: "User delete failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-2",
                    message: "User deleted successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: UserActions.deleteUsers,
            method: ApiMethods.POST,
            permission: Permission.DELETE,
            path: 'removes',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-3",
                    message: "Users delete failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-3",
                    message: "Users deleted successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: UserActions.findUserByUserId,
            method: ApiMethods.GET,
            permission: Permission.READ,
            path: 'userId/:id',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-4",
                    message: "User not failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-4",
                    message: "User found successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: UserActions.findUserByUsername,
            method: ApiMethods.GET,
            permission: Permission.READ,
            path: 'username/:username',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-5",
                    message: "User not failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-5",
                    message: "User found successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        },
        {
            action: UserActions.searchUsersByFilter,
            method: ApiMethods.POST,
            permission: Permission.READ,
            path: 'search',
            responses: [
                {
                    behavior: UserBehaviors.failed,
                    status: 400,
                    code: "F-USER-6",
                    message: "Users not failed",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: UserBehaviors.success,
                    status: 200,
                    code: "S-USER-6",
                    message: "Users found successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        }
    ];
/*
    static updateDetails: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/details/:id'),
        failed: {
            status: 400,
            code: "F-USER-2",
            message: "User updateAccount failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-2",
            message: "User updateAccount successfully",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static updateRoles: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/auth/roles/:id'),
        failed: {
            status: 400,
            code: "F-USER-2-2",
            message: "User roles updateAccount failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-2-2",
            message: "User roles updated successfully",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static updatePassword: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/auth/password/:id'),
        failed: {
            status: 400,
            code: "F-USER-2-3",
            message: "User password updateAccount failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-2-3",
            message: "User password updated successfully",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static updateUserType: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/auth/type'),
        failed: {
            status: 400,
            code: "F-USER-2-4",
            message: "User type updateAccount failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-2-4",
            message: "User type updated successfully",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static updateMyImg: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/user/updateImg'),
        failed: {
            status: 400,
            code: "F-USER-3-1",
            message: "User image updateAccount failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-3-1",
            message: "User image updateAccount successfully",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static find: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/:id'),
        failed: {
            status: 400,
            code: "F-USER-3",
            message: "Failed to find user",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-3",
            message: "User successfully found",
            log: {
                details: false,
                request: false,
                response: false
            }
        },

        notFound: {
            status: 404,
            code: "F-USER-0",
            message: "User not found",
            log: {
                details: true,
                request: true,
                response: true
            }
        }
    };

    static findMe: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/user'),
        failed: {
            status: 400,
            code: "F-USER-3-1",
            message: "Failed to find my user details",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-3-1",
            message: "My user successfully found",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static findAll: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users'),
        failed: {
            status: 400,
            code: "F-USER-3-2",
            message: "Failed to find all users",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-3-2",
            message: "Users successfully found",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static search: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/search'),
        failed: {
            status: 400,
            code: "F-USER-3-3",
            message: "Failed to find all users",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-3-3",
            message: "Users successfully found",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static searchCount: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/search/count'),
        failed: {
            status: 400,
            code: "F-USER-3-4",
            message: "Failed to find all users count",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-3-4",
            message: "Users count successfully found",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static deleteAccount: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/:id'),
        failed: {
            status: 400,
            code: "F-USER-4",
            message: "Failed to deleteAccount user",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        validationFailed: {
            status: 400,
            code: "F-USER-1-1",
            message: "Validation failed",
            log: {
                details: true,
                request: true,
                response: true
            }
        },
        success: {
            status: 200,
            code: "S-USER-4",
            message: "User successfully deleted",
            log: {
                details: false,
                request: false,
                response: false
            }
        },

        notFound: {
            status: 404,
            code: "F-USER-0",
            message: "User not found",
            log: {
                details: true,
                request: true,
                response: true
            }
        }
    };

    static deleteUsers: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/remove'),
        failed: {
            status: 400,
            code: "F-USER-4-2",
            message: "Failed to deleteAccount users",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-4-2",
            message: "Users successfully deleted",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static validateAccount: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/validateAccount/:username/:id'),
        failed: {
            status: 302,
            code: "F-USER-5",
            message: "Failed to validateAccount user account",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 302,
            code: "S-USER-5",
            message: "User account successfully validated",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static resendValidationId: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/send/validation/id/:username'),
        failed: {
            status: 400,
            code: "F-USER-6",
            message: "Failed to send validation id to user",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-6",
            message: "Validation id successfully sent to user",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static resendValidationIdByEmail: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/send/validation/id'),
        failed: {
            status: 400,
            code: "F-USER-6",
            message: "Failed to send validation id to user",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-6",
            message: "Validation id successfully sent to user",
            log: {
                details: false,
                requonse: false
            }est: false,
 resp
        }
    };

    static emailAvailability: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/availability/email/:email'),
        failed: {
            status: 400,
            code: "F-USER-7",
            message: "Failed to check email availability",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-7",
            message: "Email availability sucessfully checked",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };

    static usernameAvailability: ResponseProcessDetails = {
        endpoint: Endpoint.prepareEndpoint('/users/availability/username/:username'),
        failed: {
            status: 400,
            code: "F-USER-8",
            message: "Failed to check username availability",
            log: {
                details: true,
                request: true,
                response: true
            }
        },

        success: {
            status: 200,
            code: "S-USER-8",
            message: "Username availability successfully checked",
            log: {
                details: false,
                request: false,
                response: false
            }
        }
    };*/
}