import {IHeaders} from "../abstract/IRequest";
import {SessionConfig} from "../config/SessionConfig";

export class RequestValidator {

    static formatHeaders(headers: Array<IHeaders>): Array<IHeaders> {
        headers.forEach((header, index) => {
            if (header.headerKey === SessionConfig.AUTH_HEADER) {
                headers.splice(index, 1);
            }
        })
        return headers;
    }

}