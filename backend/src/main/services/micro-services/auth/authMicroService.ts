import * as express from 'express';
import {AuthRouter} from "./app/authRouter";
import {Environments} from "../../../common/config/environments/environments";
import {MicroService} from "../microService";

/**
 * AuthMicroService should care about user login and user rights
 */
export class AuthMicroService extends MicroService {

    constructor() {
        super(Environments.auth, new AuthRouter(express()));
    }

    run() {
        this.runMicroService();
    }
}