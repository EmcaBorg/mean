import {IValidatiorResponse} from "../abstract/validator.interface";
import { FormControl } from '@angular/forms';
import {Regex} from "../config/regex.config";


export class CustomValidators {

  static emailValidator(control: FormControl): IValidatiorResponse {
    if (control.value != "" && !Regex.EMAIL_REGEX.test(control.value)) {
      return { "incorrectMailFormat": true };
    }
    return null;
  }


  static validatePasswordStrength(control : FormControl): IValidatiorResponse{
    if (control.value != "" && !Regex.STRONG_PASS_REGEX.test(control.value)) {
      return { "passwordNotStrong": true };
    }
    return null;
  }
}
