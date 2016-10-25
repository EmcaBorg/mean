import {Constants} from "../../config/constants/constants";
import {ApiResponseBehaviorDefinition} from "./apiDefinition";

export class ResponseData {
    userId: string = Constants.PUBLIC;
    description: string = "";
    responseData: any;

    constructor(public requestData: string, public responseDefinition: ApiResponseBehaviorDefinition) {}
}