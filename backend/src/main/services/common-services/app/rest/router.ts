import {RestApi} from "../../restApi";
import {RequestProcess} from "./requestProcess";
import {ServerApiDefinition, ServerActions} from "../../../../common/app/api/definitions/serverApiDefinition";
import {ApiMethods, ApiDefinition} from "../../../../common/app/api/apiDefinition";
import {Constants} from "../../../../common/config/constants/constants";
import {Utils} from "../../../../common/app/utils";
import {Express} from "express";

export interface Router {
    app: Express;
    route(): void;
}

export abstract class BaseRoutes {

    constructor(public app: Express, public apiDefinition: ApiDefinition) {}

    publishApiAction(action: string, implementation: (process: RequestProcess) => void): void {
        var apiDef: ApiDefinition = this.apiDefinition;
        var actionDefinition = apiDef.findAction(action);
        if (Utils.notNull(actionDefinition)) {
            var path = Utils.getFullPath(apiDef.basePath + Constants.SLASH + actionDefinition.path);
            switch (actionDefinition.method) {
                case ApiMethods.DELETE: {
                    this.app.delete(path, function (req, res) {
                        var api = new RestApi(req, res);
                        api.run(apiDef, action, implementation);
                    });
                    break;
                }
                case ApiMethods.POST: {
                    this.app.post(path, function (req, res) {
                        var api = new RestApi(req, res);
                        api.run(apiDef, action, implementation);
                    });
                    break;
                }
                case ApiMethods.PUT: {
                    this.app.put(path, function (req, res) {
                        var api = new RestApi(req, res);
                        api.run(apiDef, action, implementation);
                    });
                    break;
                }
                default: {
                    this.app.get(path, function (req, res) {
                        var api = new RestApi(req, res);
                        api.run(apiDef, action, implementation);
                    });
                    break;
                }
            }
            Utils.getLogger('published-path').debug(actionDefinition.method + ' ' + path);
        } else {
            var log = Utils.getLogger('publishApiAction');
            var className = apiDef.constructor.toString().match(/\w+/g)[1];
            log.error('Action with name ' + action + ' not found in: ' + className);
        }
    }
}

export class DefaultRoutes {

    constructor(public app: Express) {}

    static notFound(process: RequestProcess) {
        var message = 'Requested resource not found, but micro service successfully working';
        process.sendNotFoundResponse(message);
    }

    configureRoutes(): void {
        this.app.use(function (req, res) {
            var api = new RestApi(req, res);
            api.run(new ServerApiDefinition(), ServerActions.server, DefaultRoutes.notFound);
        });
    }
}