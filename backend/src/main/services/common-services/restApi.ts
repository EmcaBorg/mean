import {Api} from "./app/rest/api";
export * from "./app/security/crypt";
export * from "./app/security/session";
export *  from "./app/rest/api";
export *  from "./app/rest/requestProcess";
export *  from "./app/rest/responseBuilder";
export *  from "./app/validator/validator";
export *  from "./app/rest/service";
export *  from "./app/rest/component";
export *  from "./app/services/auth/authService";
export *  from "./app/services/users/userService";
export *  from "./app/services/notifications/notificationService";
export *  from "./app/services/notifications/notificationType";
export *  from "./app/services/notifications/notification";

export class RestApi extends Api{

    constructor(req: any, res: any) {
        super(req, res);
    }
}