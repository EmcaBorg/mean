import {Validator} from "../../../../common-services/app/validator/validator";

export interface IdentificationRequest {
    email: string;
    questionId: number;
    answerOnQuestion: string;
}

export class IdentificationValidator {

    static validateEmail(request: IdentificationRequest) {
        Validator.validateObject(request);
        Validator.validateEmail(request.email);
    }

    static validateRequest(request: IdentificationRequest, callback: (err: any) => void) {
        try {
            Validator.validateRange(request.questionId, 1, 5, "Question id");
            Validator.validateSecurityAnswer(request.answerOnQuestion);
        } catch (err) {
            callback(err);
        }
    }
}