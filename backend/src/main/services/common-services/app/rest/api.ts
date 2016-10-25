import {RequestProcess} from "./requestProcess";
import {Constants} from "../../../../common/config/constants/constants";
import {BaseApiDefinition, ApiDefinition} from "../../../../common/app/api/apiDefinition";

export class Api {

    private process: RequestProcess = null;

    constructor(req: any, res: any) {
        this.process = new RequestProcess(req, res);
    }

    run(apiDefinition: ApiDefinition, action: string, callback: (process: RequestProcess) => void): void {
        let api: Api = this;
        try {
            api.checkRequestTimeout(api);
            api.process.validateUserSession(apiDefinition, action, callback);
        } catch (ex) {
            api.process.sendFailedResponse(ex);
        }
    }

    checkRequestTimeout(api: Api) {
        var timeout: number = Constants.REQUEST_TIMEOUT;
        setTimeout(
            function () {
                api.process.sendResponse(BaseApiDefinition.timeOutBehavior, "Time out :D");
            },
            timeout
        );
    }
}