import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router'
import {IResponseCallback} from "../abstract/IResponse";
import {SessionConfig} from "../config/SessionConfig";
import {SessionService} from "../services/SessionService";
import {ResponseExtractor} from "./ResponseExtractor";

@Injectable()
export class ResponseValidator {

    constructor(private sessionService: SessionService, private router: Router) {}

    public validateResponse(res: Response, validatedResponseCallback: IResponseCallback) {
        let responseCode = res.status;
        let statusText = ResponseExtractor.headerExtractor(res, SessionConfig.STATUS_TEXT);
        switch (responseCode) {
            case 200:
                validatedResponseCallback(false, res);
                break;
            case 500:
                validatedResponseCallback(true, res.statusText);
                break;
            default:
                switch (statusText) {
                    case 'F-AUTH-1-1':
                        this.sessionService.deleteSession();
                        this.router.navigate(['/sign-in']);
                        break;
                    case 'F-AUTH-1-4':
                        this.sessionService.deleteSession();
                        this.router.navigate(['/sign-in']);
                        break;
                }
                validatedResponseCallback(true, statusText);
        }
    }


}
