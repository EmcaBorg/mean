import {ApiResponseBehaviorDefinition} from "../api/apiDefinition";
import {Utils} from "../utils";

export class Exception extends Error {

    constructor(public content: ApiResponseBehaviorDefinition, public description?: string, public data?: string){
        super();
        if (Utils.notNull(content)) {
            Utils.getLogger('Exception').error(content.message + " " + description);
        }
    }
}