import {Injectable} from '@angular/core';
import {Http, Request, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {URLException} from '../exceptions/URLException';
import {ResponseValidator} from "../utils/ResponseValidator";
import {IRestService} from "../abstract/IRestService";
import {IResponseCallback} from "../abstract/IResponse";
import {EndPoints} from "../config/EndpointsConfig";
import {IHttpConfig} from "../abstract/IRequest";
import {IEndPoint} from "../abstract/IEndpoints";
import {SessionService} from "./SessionService";
import {SessionConfig} from "../config/SessionConfig";
import {RequestValidator} from "../utils/RequestValidator";
import {CoreUtils} from "../utils/CoreUtils";
import {ENVIRONMENT} from "../config/Environment";
import {TransporterService} from "./TransporterService";


@Injectable()
export class RestService implements IRestService {

    constructor(private http: Http, private sessionService: SessionService, private transporterService: TransporterService, private responseValidator: ResponseValidator, private router: Router) {
    }

    private redirectUrl: string;

    private generateURL(httpConfig: IHttpConfig): string {
        let endpoint: IEndPoint;
        let url: string;
        if (httpConfig.hasOwnProperty('endpoint')) {
            endpoint = EndPoints[httpConfig.endpoint];
            if (httpConfig.requestData.hasOwnProperty('path')) {
                if (httpConfig.requestData.hasOwnProperty('extendPath')) {
                    url = CoreUtils.format("{0}://{1}:{2}{3}/{4}/{5}", [endpoint.protocol, endpoint.host, endpoint.port, endpoint.path, httpConfig.requestData.path, httpConfig.requestData.extendPath]);
                    return url;
                }
                else {
                    if (endpoint.relativePath) {
                        url = CoreUtils.format("{0}://{1}:{2}{3}/{4}", [endpoint.protocol, endpoint.host, endpoint.port, endpoint.path, httpConfig.requestData.path]);
                        return url;
                    } else {
                        url = CoreUtils.format("{0}/{1}", [endpoint.path, httpConfig.requestData.path]);
                        return url;
                    }
                }
            }
            else {
                throw new URLException("Provide full path")
            }
        }
        else {
            throw new URLException("Provide Endpoint HTTP config")
        }

    }


    private generateRequest(httpConfig: IHttpConfig): Request {
        let requestOptionsArgs: RequestOptionsArgs = {};
        requestOptionsArgs.url = this.generateURL(httpConfig);
        if (httpConfig.requestData.hasOwnProperty('method')) {
            requestOptionsArgs.method = httpConfig.requestData.method;
        }
        if (httpConfig.requestData.hasOwnProperty('search')) {
            let searchParams: URLSearchParams = new URLSearchParams();
            searchParams.set(httpConfig.requestData.search[0], httpConfig.requestData.search[1]);
            requestOptionsArgs.search = searchParams;
        }
        if (httpConfig.requestData.hasOwnProperty('headers')) {
            let headers: Headers = new Headers();
            httpConfig.requestData.headers.forEach(function (key, index) {
                headers.append(httpConfig.requestData.headers[index].headerKey, httpConfig.requestData.headers[index].headerValue);
            });
            headers.append(SessionConfig.DELEGATED_CLINIC, this.sessionService.getDelegatedClinic());
            requestOptionsArgs.headers = headers;
        }
        if (httpConfig.requestData.hasOwnProperty('body')) {
            requestOptionsArgs.body = httpConfig.requestData.body;
        }
        return new Request(new RequestOptions(new RequestOptions({}).merge(requestOptionsArgs)));


    }


    public sendRequest(httpConfig: IHttpConfig, validatedResponseCallback: IResponseCallback): Subscription {
        if (httpConfig.access === 'PUBLIC') {
            let requestPrepared: Request = this.generateRequest(httpConfig);
            return this.http.request(requestPrepared).subscribe(res => this.responseValidator.validateResponse(res, validatedResponseCallback),
                res => this.responseValidator.validateResponse(res, validatedResponseCallback));
        }
        else {
            let authHeader = this.sessionService.getSession();
            if (authHeader) {
                RequestValidator.formatHeaders(httpConfig.requestData.headers);
                httpConfig.requestData.headers.push({headerKey: SessionConfig.AUTH_HEADER, headerValue: authHeader});
                let requestPrepared: Request = this.generateRequest(httpConfig);
                return this.http.request(requestPrepared).subscribe(res => this.responseValidator.validateResponse(res, validatedResponseCallback),
                    res => this.responseValidator.validateResponse(res, validatedResponseCallback));
            }
            else {  _
                /***
                 NO TOKEN
                 Redirect to Sign In
                 ***/
                this.router.navigate(['/sign-in']);
            }
        }
    }

    public static getAjaxHeaders(session?: string, delegatedClinic?: string,) {
        return {
            'user-auth': session ? session : undefined,
            'user-source': 'WEB',
            }
    }

    public static getAjaxPath(path: string) {
        return ENVIRONMENT.PROTOCOL + '://' + ENVIRONMENT.IP + ':' + ENVIRONMENT.PORT + path;
    }
}
