import * as express from 'express';
import {Environments} from "../../../common/config/environments/environments";
import {MicroService} from "../microService";
import {RestRouter} from "./app/restRouter";

/**
 * Main rest web service
 */
export class RestMicroService extends MicroService {

    constructor() {
        super(Environments.rest, new RestRouter(express()));
    }

    run() {
        this.runMicroService();
    }
}