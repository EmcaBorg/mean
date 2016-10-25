import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as log4js from 'log4js';
import * as uuid from 'node-uuid';
import {Environment} from "../config/endpoints/endpoint";
import {Logger} from "log4js";
import {Constants} from "../config/constants/constants";
import {Environments} from "../config/environments/environments";
import {IPublicUserDetails} from "../../database/app/users/model/user";
import {Crypt} from "../../services/common-services/app/security/crypt";
import {Session} from "../../services/common-services/app/security/session";

export class Utils {

    static generateBaseUrl(environment: Environment) {
        return environment.protocol + "://" + environment.host + ":" + environment.port;
    }

    static getTime(): number {
        return Date.now();
    }

    static getFullPath(path: string): string {
        return Constants.SLASH + Constants.API + Constants.SLASH + Constants.VERSION + Constants.SLASH + path;
    }

    static getFullEndpoint(path: string): string {
        var rest = Environments.rest;
        return rest.publicProtocol + '://' + rest.host + ':' + rest.port + Utils.getFullEndpoint(path);
    }

    static getRandomNumber(): number {
        return Math.random();
    }

    static getRandomId(): string {
        return uuid.v1().replace(/-/g, '');
    }

    static defined(value: any): boolean {
        return value !== undefined;
    }

    static notNull(value: any): boolean {
        return (this.defined(value) && value !== null);
    }

    static isNumber(value: any): boolean {
        return (this.notNull(value) && !isNaN(value));
    }

    static isNull(value: any): boolean {
        return !this.notNull(value);
    }

    static notEmpty(value: string): boolean {
        return (this.notNull(value) && value !== "");
    }

    static getLogger(name: string): Logger {
        var logger = log4js.getLogger(name);
        logger.setLevel(Environments.properties.logLevel);
        return logger;
    }

    static isEmpty(value: string): boolean {
        return !this.notEmpty(value);
    }

    static fullName(userDetails: IPublicUserDetails): string {
        return userDetails.firstName + " " + userDetails.lastName;
    }

    static ignore(param?: any): (param?: any)=>void {
        return function(param?: any){};
    }

    static encryptSession(session: Session): string {
        var security = new Crypt();
        return security.encryptSession(session);
    }

    static comparePassword(value: string, hash: string): boolean {
        var security = new Crypt();
        return security.comparePassword(value, hash);
    }

    static configureExpress(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        app.use(bodyParser.urlencoded({ extended: true }));
        //noinspection TypeScriptValidateTypes
        app.use(methodOverride('X-HTTP-Method-Override'));
        //noinspection TypeScriptValidateTypes
        app.use(morgan('dev'));
        app.use(cors({ exposedHeaders: Constants.AUTH }));
    }
}