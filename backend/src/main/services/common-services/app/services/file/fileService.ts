import {Service} from "../../rest/service";
import * as fileStream from "fs";
import {Utils} from "../../../../../common/app/utils";
import {Environments} from "../../../../../common/config/environments/environments";
import {Constants} from "../../../../../common/config/constants/constants";
import {Logger} from "log4js";
import {ApiResponseBehaviorDefinition} from "../../../../../common/app/api/apiDefinition";
import {UserApiDefinition} from "../../../../../common/app/api/definitions/userApiDefinition";

var fs: FileService;
export class FileService implements Service {

    log:Logger = Utils.getLogger('FileService');

    constructor() {
        fs = this;
    }

    getActionBehavior(action:string, behavior:string): ApiResponseBehaviorDefinition {
        var api = new UserApiDefinition();
        return api.findActionBehavior(action, behavior);
    };

    uploadProfilePicture(userId: string, image: string, failed: (err)=>void, success: (extension: string) => void) {
        if (Utils.notEmpty(image)) {
            var data = image.split(",");
            var arg = /data:image\/(.+);base64/.exec(data[0]);
            if (Utils.notNull(arg) && Constants.ALLOWED_IMAGE_TYPES.indexOf(arg[1]) >= 0) {
                var extension = arg[1];
                var base64Data = image.replace(data[0], "");
                var path = Environments.properties.imagesUrl + "/" + Constants.IMAGES_FOLDER;
                if (!fileStream.existsSync(path)){
                    fileStream.mkdirSync(path);
                }
                path = path + "/" + userId + "." + extension;
                fileStream.writeFile(path, base64Data, 'base64', function (err: any) {
                    if (err) {
                        Utils.getLogger("File").error("File upload file", err);
                        failed(err);
                    } else {
                        success(extension);
                    }
                });
            } else {
                failed("Wrong format of image: " + arg[1]);
            }
        } else {
            failed("Empty image");
        }
    }

    deleteImage(file: string) {
        if (Utils.notEmpty(file)) {
            var path = Environments.properties.imagesUrl + file;
            fileStream.exists(path, function(exists) {
                if(exists) {
                    fileStream.unlink(path);
                }
            });
        }
    }
}