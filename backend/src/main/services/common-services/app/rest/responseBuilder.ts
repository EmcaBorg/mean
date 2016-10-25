import {Response} from "../../../../common/app/api/response";
import {Utils} from "../../../../common/app/utils";
import {ResponseData} from "../../../../common/app/api/responseData";
import {ApiResponseBehaviorLoggingDefinition} from "../../../../common/app/api/apiDefinition";

export class ResponseBuilder {
    sent: boolean = false;

    getLogMessage(log: ApiResponseBehaviorLoggingDefinition, userId: string, text: string, requestData: any, response: Response) {
        var separator = "\n--------------------------------------------";
        var message = separator + "\nLOG: ";
        var time = Utils.getTime();
        if (log.details) {
            message += text + " for userId '" + userId;
            message += "' at: '" + new Date(time).toString();
            message += " (" + time + ")'";
        }
        if (log.request) {
            message += "\nREQUEST: " + JSON.stringify(requestData);
        }
        if (log.response) {
            message += "\nRESPONSE: " + JSON.stringify(response);
        }
        return message + "\n" + separator;
    }

    sendResponse(data: ResponseData, res: any) {
        if (!this.sent) {
            var response = new Response(data.responseDefinition.code, data.responseData);
            response.message = data.responseDefinition.message;
            response.description = data.description;
            var log = data.responseDefinition.logging;
            if (log.details || log.request || log.response) {
                var text = response.message;
                if (Utils.notEmpty(data.description)) {
                    text += ", " + data.description;
                }
                Utils.getLogger("Api").info(this.getLogMessage(log, data.userId, text, data.requestData, response));
            }
            this.sent = true;
            res.status(data.responseDefinition.status).send(response);
        }
    }
}