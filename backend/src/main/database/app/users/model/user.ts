import * as mongoose from 'mongoose';
import {IAddress} from '../../core/address';
import {Utils} from "../../../../common/app/utils";
import {Constants} from "../../../../common/config/constants/constants";
import {IModel} from "../../core/model";
import {Access} from "../../../../common/app/security/role";

export class Gender {
    static MALE = "MALE";
    static FEMALE = "FEMALE";
}

export class Language {
    static ENGLISH = "en";
    static GERMAN = "de";
}

export class UserTypes {
    static USER = "USER";
    static ADMIN = "ADMIN";
}

export type UserType = 'USER' | 'ADMIN';

export class ISecret {
    validated: boolean;
    validationId: string;
    validationTime: number;
    identificationId: string;
    identificationTime: number;
}

export class Secret implements ISecret {
    validationId: string;
    validationTime: number;
    identificationId: string;
    identificationTime: number;

    constructor(public validated = false) {
        this.validationId = Secret.generateId();
        this.validationTime = Utils.getTime();
    }

    static generateId() {
        var id = "" + parseInt("" + (Utils.getRandomNumber() * 100000));
        if (id.length == 7) {
            return id;
        } else {
            return "0" + id;
        }
    }

    static resetValidation(secret: ISecret) {
        secret.validationId = Secret.generateId();
        secret.validated = false;
        return secret;
    }
}

export interface IPublicUserDetails {
    firstName: string;
    lastName: string;
    username: string;
    born: number;
    email: string;
    phone: string;
    gender: string;
    language: string;
    image: string;
    address: IAddress;
}

export interface IPrivateUserDetails {
    userType: UserType;
    password: string;
    validatedEmail: string;
    secret: ISecret;
    accesses: Access[];
}

export interface IUser extends IModel{
    userId: string;
    publicUserDetails: IPublicUserDetails;
    privateUserDetails: IPrivateUserDetails;
}

export interface IUserDocument extends IUser, mongoose.Document {
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
}

export const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        default: Utils.getRandomId()
    },
    publicUserDetails: {
        firstName: {
            required: true,
            type: String
        },
        lastName: {
            required: true,
            type: String
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String
        },
        gender: {
            type: String,
            required: true,
            default: Gender.MALE
        },
        language: {
            type: String,
            required: true,
            default: Language.ENGLISH
        },
        born: Number,
        phone: {
            type: String
        },
        address: {
            houseNumber: String,
            street: String,
            city: String,
            state: String,
            postalCode: String,
            country: String,
            description: String
        }
    },
    privateUserDetails: {
        accesses: mongoose.Schema.Types.Mixed,
        password: {
            type: String,
            required: true
        },
        userType: {
            type: String,
            required: true,
            default: UserTypes.USER
        },
        secret: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    },
    cts: {
        type: Number,
        required: true
    },
    uts: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    }
});

export var User = <IUserModel>mongoose.model<IUserDocument>(Constants.DATABASE.MODEL.USER, UserSchema);