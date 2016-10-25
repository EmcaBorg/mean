import {ApiActionDefinition, ApiMethods, BaseApiDefinition} from "../apiDefinition";
import {Module} from "../../security/module";
import {Permission} from "../../security/permission";

export type ServerAction = 'server';
export type ServerBehavior = 'success' | 'failed' | 'notFound';

export class ServerActions {
    static server: ServerAction = 'server';
}
export class ServerBehaviors {
    static success: ServerBehavior = 'success';
    static failed: ServerBehavior = 'failed';
    static notFound: ServerBehavior = 'notFound';
}

export class ServerApiDefinition extends BaseApiDefinition {
    basePath: string = '';
    module: string = Module.REST;
    actions: ApiActionDefinition[] = [
        {
            action: ServerActions.server,
            method: ApiMethods.ANY,
            permission: Permission.ANY,
            path: '',
            responses: [
                BaseApiDefinition.notFoundBehavior,
                {
                    behavior: ServerBehaviors.failed,
                    status: 500,
                    code: "F-SERVER-1",
                    message: "Internal server error",
                    logging: {
                        details: true,
                        request: true,
                        response: true
                    }
                },
                {
                    behavior: ServerBehaviors.success,
                    status: 200,
                    code: "S-SERVER-1",
                    message: "Server working successfully",
                    logging: {
                        details: false,
                        request: false,
                        response: false
                    }
                }
            ]
        }
    ];
}