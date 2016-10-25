import {Logger} from "log4js";
import {ApiResponseBehaviorDefinition} from "../../../../common/app/api/apiDefinition";

export interface Service {
    log: Logger;
    getActionBehavior: (action: string, behavior: string)=> ApiResponseBehaviorDefinition;
}