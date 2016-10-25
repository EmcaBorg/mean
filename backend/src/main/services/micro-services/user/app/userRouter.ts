import {UserRoutes} from "./routes/userRoutes";
import {DefaultRoutes, Router} from "../../../common-services/app/rest/router";
import {AccountRoutes} from "./routes/accountRoutes";
import {Express} from "express";

export class UserRouter implements Router  {
    user: UserRoutes;
    account: AccountRoutes;
    defaultRoutes: DefaultRoutes;

    constructor(public app: Express) {
        this.user = new UserRoutes(app);
        this.account = new AccountRoutes(app);
        this.defaultRoutes = new DefaultRoutes(app);
    }

    route() {
        this.user.configureRoutes();
        this.account.configureRoutes();
        this.defaultRoutes.configureRoutes();
    }
}