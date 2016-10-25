import {Environment} from "../../common/config/endpoints/endpoint";
import {Database} from "../../database/database";
import {Utils} from "../../common/app/utils";
import {Router} from "../common-services/app/rest/router";
import {Logger} from "log4js";

/**
 * Abstract micro service
 */
export abstract class MicroService {
    log: Logger;
    name: string;

    constructor(public environment: Environment, public router: Router) {
        this.name = environment.name;
        this.log = Utils.getLogger(this.name);
    }

    runMicroService() {
        if (Utils.defined(this.environment.database)){
            Database.connect(this.environment.database.url, this.environment.name);
        } else {
            this.log.warn('Database connection not defined for "' + this.environment.name + '" environment.');
        }
        var port = this.environment.port;
        Utils.configureExpress(this.router.app);
        this.router.route();
        this.router.app.listen(port);
        this.log.info(this.name + " micro-service successfully started on port: " + port);
    }
}