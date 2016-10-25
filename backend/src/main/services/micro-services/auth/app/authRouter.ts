import {AuthRoutes} from "./routes/authRoutes";
import {RoleRoutes} from "./routes/roleRoutes";
import {Router, DefaultRoutes} from "../../../common-services/app/rest/router";
import {Express} from "express";

export class AuthRouter implements Router {
    auth: AuthRoutes;
    role: RoleRoutes;
    defaultRoutes: DefaultRoutes;

    constructor(public app: Express) {
        this.auth = new AuthRoutes(app);
        this.role = new RoleRoutes(app);
        this.defaultRoutes = new DefaultRoutes(app);
    }

	route() {
        this.auth.configureRoutes();
        this.role.configureRoutes();
        this.defaultRoutes.configureRoutes();
	}
}