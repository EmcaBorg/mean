import * as express from 'express';
import {UserRouter} from "./app/userRouter";
import {Environments} from "../../../common/config/environments/environments";
import {MicroService} from "../microService";

/**
 * UserMicroService is responsible for user details
 */
export class UserMicroService extends MicroService {

    constructor() {
        super(Environments.user, new UserRouter(express()));
    }

    run() {
        this.runMicroService();
    }
}