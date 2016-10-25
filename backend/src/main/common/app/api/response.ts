import {Utils} from "../utils";

export class Response {
    message: string;
    description: string;
    time: number = Utils.getTime();

    constructor(public code: string, public data?: any) {}
}