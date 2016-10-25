import * as mongoose from 'mongoose';
import {Utils} from "../../../../common/app/utils";
import {Constants} from "../../../../common/config/constants/constants";
import {Access} from "../../../../common/app/security/role";
import {IModel} from "../../core/model";

export interface IRoleDetails {
    roleId: string;
    name: string;
    userIds: string[];
    accesses: Access[];
}

export interface IRole extends IModel {
    roleDetails: IRoleDetails;
}

export interface IRoleDocument extends IRole, mongoose.Document {
}

export interface IRoleModel extends mongoose.Model<IRoleDocument> {
}

export const RoleSchema = new mongoose.Schema({
    staticId: {
        type: String,
        required: true,
        unique: true,
        default: Utils.getRandomId()
    },
    roleDetails: {
        roleId: {
            type: String,
            required: true,
            unique: true,
            default: Utils.getRandomId()
        },
        name: {
            type: String
        },
        userIds: [String],
        accesses: mongoose.Schema.Types.Mixed
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

export var Role = <IRoleModel>mongoose.model<IRoleDocument>(Constants.DATABASE.MODEL.ROLE, RoleSchema);