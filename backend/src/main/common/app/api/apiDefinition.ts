import {Utils} from "../utils";
import {Environment} from "../../config/endpoints/endpoint";
export type ApiMethod = 'ANY' | 'POST' | 'GET' | 'PUT' | 'DELETE';

export class ApiMethods {
    static ANY: ApiMethod = 'ANY';
    static POST: ApiMethod = 'POST';
    static GET: ApiMethod = 'GET';
    static PUT: ApiMethod = 'PUT';
    static DELETE: ApiMethod = 'DELETE';
}

export interface ApiDefinition {
    basePath: string;
    module: string;
    environment: Environment;
    actions: ApiActionDefinition[];

    findAction(action: string): ApiActionDefinition;
    findActionBehavior (action: string, behavior: string): ApiResponseBehaviorDefinition;
}

export interface ApiActionDefinition {
    action: string;
    permission: string;
    method: ApiMethod;
    path: string;
    responses: ApiResponseBehaviorDefinition[];
}

export interface ApiResponseBehaviorDefinition {
    behavior: string;
    status: number;
    code: string;
    message: string;
    logging: ApiResponseBehaviorLoggingDefinition;
}

export interface ApiResponseBehaviorLoggingDefinition {
    details: boolean;
    request: boolean;
    response: boolean;
}

export abstract class BaseApiDefinition implements ApiDefinition {

    static notFoundBehavior: ApiResponseBehaviorDefinition = {
        behavior: 'notFound',
        status: 404,
        code: "F-SERVER-0-1",
        message: "Resource not found",
        logging: {
            details: true,
            request: true,
            response: true
        }
    };

    static timeOutBehavior: ApiResponseBehaviorDefinition = {
        behavior: 'timeOut',
        status: 500,
        code: "F-SERVER-0-2",
        message: "Server time out",
        logging: {
            details: true,
            request: true,
            response: true
        }
    };

    static internalServerError: ApiResponseBehaviorDefinition = {
        behavior: 'error',
        status: 500,
        code: "F-SERVER-0-3",
        message: "Internal server error",
        logging: {
            details: true,
            request: true,
            response: true
        }
    };

    basePath: string;
    module: string;
    environment: Environment;
    actions: ApiActionDefinition[];

    findActionBehavior (action: string, behavior: string): ApiResponseBehaviorDefinition {
        var response = BaseApiDefinition.internalServerError;
        this.actions.forEach(function (item:ApiActionDefinition) {
            if (item.action == action) {
                item.responses.forEach(function (responseItem: ApiResponseBehaviorDefinition) {
                    if (responseItem.behavior == behavior) {
                        response = responseItem;
                        return;
                    }
                })
            }
        });
        return response;
    }

    findAction(action: string): ApiActionDefinition {
        var response = null;
        this.actions.forEach(function (item:ApiActionDefinition) {
            if (item.action == action) {
                response = item;
                return;
            }
        });
        return response;
    }
}