import {IValidatiorResponse} from "../abstract/IValidator";
import {FormControl} from '@angular/forms';
import {Regex} from "../config/RegexConfig";


export class FormValidator {

    static emailValidator(control: FormControl): IValidatiorResponse {
        if (control.value != "" && !Regex.EMAIL_REGEX.test(control.value)) {
            return {"correctMailFormat": true};
        }
        return null;
    }


    static validatePasswordStrength(control: FormControl): IValidatiorResponse {
        if (control.value != "" && !Regex.STRONG_PASS_REGEX.test(control.value)) {
            return {"passwordStrong": true};
        }
        return null;
    }
}
