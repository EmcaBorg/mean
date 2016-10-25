import {Utils} from "../../../../common/app/utils";

export class Validator {

    static validateUsername(username: string) {
        if (!Utils.notEmpty(username)) {
            var message = "Username is null or empty";
            throw new Error(message);
        }
    }

    static validatePassword(password: string, name: string = "Password") {
        if (!Utils.notEmpty(password)) {
            var message = name + " is null or empty";
            throw new Error(message);
        } else {
            var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
            if (!regex.test(password)) {
                var message = name + " rules: At least five characters, at least one number, one lowercase and one uppercase letter";
                throw new Error(message);
            }
        }
    }

    static validateSecurityAnswer(answer: string, name: string = "Security answer") {
        if (!Utils.notEmpty(answer)) {
            var message = name + " is null or empty";
            throw new Error(message);
        }
    }

    static validateEmail(email: string) {
        if (!Utils.notEmpty(email)) {
            var message = "Email is null or empty";
            throw new Error(message);
        }
    }

    static validateString(value: string, fieldName: string) {
        if (!Utils.notEmpty(value)) {
            var message = fieldName + " is null or empty";
            throw new Error(message);
        }
    }

    static validateName(name: string) {
        if (!Utils.notEmpty(name)) {
            var message = "Name is null or empty";
            throw new Error(message);
        }
    }

    static validateLength(length: number, max: number, name: string = "String") {
        if (Utils.notNull(length) && Utils.notNull(max) && length > max) {
            var message = name + " size is: " + length + " but max is: " + max ;
            throw new Error(message);
        }
    }

    static validateRange(number: number, from: number, to: number, desc: string = "Number") {
        if (!isNaN(number) && Utils.notNull(number)) {
            number = parseInt(number + "");
            if (Utils.notNull(from) && Utils.notNull(to)) {
                if (number >= from && number <= to) {
                    return;
                } else {
                    var message = desc + "(" + number + ") should be between " + from + " and " + to;
                    throw new Error(message);
                }
            } else {
                var message = "Number range validation issue, some of numbers are null";
                throw new Error(message);
            }
        } else {
            var message = desc + " should be defined between " + from + " and " + to;
            throw new Error(message);
        }
    }

    static validateObject(object: any, objectName: string = "Object") {
        if (!Utils.notNull(object)) {
            var message = objectName + " is null, empty or undefined";
            throw new Error(message);
        }
    }
}