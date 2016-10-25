import {Crypt} from '../../security/crypt';
import {Validator} from '../../validator/validator';
import {Service} from '../../rest/service';
import {NotificationService} from '../notifications/notificationService';
import {
    IUser, Secret, Language, UserTypes, IPublicUserDetails, IPrivateUserDetails
} from "../../../../../database/app/users/model/user";
import {Database} from "../../../../../database/database";
import {Utils} from "../../../../../common/app/utils";
import {RoleManager} from "../../../../../common/app/security/roleManager";
import {FileService} from "../file/fileService";
import {Environments} from "../../../../../common/config/environments/environments";
import {Constants} from "../../../../../common/config/constants/constants";
import {Exception} from "../../../../../common/app/exception/exception";
import {UserDal} from "../../../../../database/app/users/usersDal";
import {Logger} from "log4js";
import {ApiResponseBehaviorDefinition} from "../../../../../common/app/api/apiDefinition";
import {
    AccountApiDefinition, AccountActions,
    AccountBehaviors
} from "../../../../../common/app/api/definitions/accountApiDefinition";
import {StaticRole} from "../../../../../common/app/security/staticRole";

var security = new Crypt();
var ns: NotificationService;
var fs: FileService;

export class AccountService implements Service {

    log:Logger = Utils.getLogger('AccountService');
    userDal: UserDal = Database.dal.user;

    constructor() {
        ns = new NotificationService();
        fs = new FileService();
    }

    getActionBehavior(action:string, behavior:string): ApiResponseBehaviorDefinition {
        var api = new AccountApiDefinition();
        return api.findActionBehavior(action, behavior);
    }

    createAccount(user: IUser, failed: (err)=>void, success: () => void) {
        var accountService = this;
        Validator.validateObject(user.publicUserDetails, 'publicUserDetails');
        Validator.validateObject(user.privateUserDetails, 'privateUserDetails');
        var userDetails: IPublicUserDetails = <IPublicUserDetails> user.publicUserDetails;
        var password: string = user.privateUserDetails.password;
        var userModel: IUser = accountService.createUserModel(userDetails, password);
        var validationId = userModel.privateUserDetails.secret.validationId;
        var fullName = Utils.fullName(userDetails);
        var imageId = Utils.getRandomId();
        var imageContent = userDetails.image;
        userDetails.image = '';
        var language = user.publicUserDetails.language;
        var email = user.publicUserDetails.email;
        accountService.userDal.create(userModel, failed, function () {
            var ignore = Utils.ignore();
            ns.sendSignUpValidationId(fullName, email, user.userId, validationId, language, ignore, ignore);
            if (Utils.isEmpty(imageContent)) {
                fs.uploadProfilePicture(imageId, imageContent, failed, function (extension) {
                    userDetails.image = "/" + Constants.IMAGES_FOLDER + "/" + imageId + "." + extension;
                    accountService.userDal.save(userModel, Utils.ignore, Utils.ignore);
                });
            }
            success();
        });
    }

    updateAccount(newDetails: IPublicUserDetails, user: IUser, failed: (err)=>void, success: () => void) {
        var newEmail = newDetails.email != user.publicUserDetails.email;
        var userModel: IUser = this.updateUserModel(user, newDetails, newEmail);
        this.userDal.save(userModel, failed, function () {
            var fullName = Utils.fullName(newDetails);
            var username = newDetails.username;
            var email = newDetails.email;
            var language = newDetails.language;
            var id = userModel.privateUserDetails.secret.validationId;
            ns.sendChangeEmailValidation(fullName, email, username, id, language, failed, success);
        });
    }

    deleteAccount(userId: string, failed: (err)=>void, success: () => void) {
        this.userDal.removeByUserId(userId, failed, success);
    }

    changeAccountPassword(oldPassword: string, newPassword: string, user: IUser, failed: (err)=>void, success: () => void) {
        var accountService = this;
        if (Utils.comparePassword(oldPassword, user.privateUserDetails.password)) {
            user.privateUserDetails.password = security.hashPassword(newPassword);
            accountService.userDal.save(user, failed, success);
        } else {
            var behavior = accountService.getActionBehavior(AccountActions.changeAccountPassword, AccountBehaviors.wrongOldPassword);
            failed(new Exception(behavior))
        }
    }

    updateAccountImage(image: string, user: IUser, failed: (err)=>void, success: () => void) {
        var accountService = this;
        var imageId = Utils.getRandomId();
        fs.uploadProfilePicture(imageId, image, failed, function (extension) {
            fs.deleteImage(user.publicUserDetails.image);
            user.publicUserDetails.image = "/" + Constants.IMAGES_FOLDER + "/" + imageId + "." + extension;
            accountService.userDal.save(user, failed, success);
        });
    }

    validateAccount(userId: string, validationId: string, failed: (err: any)=> void, success: ()=> void) {
        var userDal = this.userDal;
        userDal.findByUserId(userId, failed, function (user: IUser) {
            if (user.privateUserDetails.secret.validationId == validationId) {
                user.privateUserDetails.secret = new Secret(true);
                userDal.save(user, failed, success);
            } else {

            }
        });
    }

    sendValidationId(email: string, failed: (err: any)=> void, success: ()=> void) {
        var userDal = this.userDal;
        userDal.findByEmail(email, failed, function (user: IUser) {
            if (!user.privateUserDetails.secret.validated) {
                var fullName = Utils.fullName(user.publicUserDetails);
                var email = user.publicUserDetails.email;
                var id = user.privateUserDetails.secret.validationId;
                var language = user.publicUserDetails.language;
                new NotificationService().sendSignUpValidationId(fullName, email, user.userId, id, language, failed, success);
            } else {
                failed("Account already validated");
            }
        });
    }

    updateUserModel(user: IUser, userDetails: IPublicUserDetails, newEmail: boolean): any {
        var accountService = this;
        try {
            Validator.validateObject(userDetails);
            Validator.validateUsername(userDetails.username);
            Validator.validateEmail(userDetails.email);
            Validator.validateName(userDetails.firstName);
            Validator.validateName(userDetails.lastName);
            Validator.validateString(userDetails.gender, "Gender");
            Validator.validateString(userDetails.language, "Language");
            Validator.validateObject(userDetails.address);
            Validator.validateString(userDetails.address.city, "City");
            Validator.validateString(userDetails.address.street, "Street");
            Validator.validateString(userDetails.address.houseNumber, "House number");
            Validator.validateString(userDetails.address.postalCode, "Postal code");
            if (Utils.isNull(userDetails.language)) {
                userDetails.language = Language.GERMAN;
            } else {
                userDetails.language = userDetails.language.toLowerCase();
            }

            if (Utils.notNull(userDetails.image)) {
                Validator.validateLength(userDetails.image.length, Environments.properties.maxImageSize, "Image");
            }
        } catch (err){
            var behavior = accountService.getActionBehavior(AccountActions.updateAccount, AccountBehaviors.validationFailed);
            throw new Exception(behavior, err.message);
        }
        if (newEmail) {
            user.privateUserDetails.secret = Secret.resetValidation(user.privateUserDetails.secret);
        }
        user.publicUserDetails = userDetails;
        return user;
    }

    private createUserModel(userDetails: IPublicUserDetails, password: string): IUser {
        var accountService = this;
        try {
            Validator.validateObject(userDetails);
            Validator.validateEmail(userDetails.email);
            Validator.validateName(userDetails.firstName);
            Validator.validateName(userDetails.lastName);
            Validator.validatePassword(password);
            Validator.validateString(userDetails.gender, "Gender");
            Validator.validateObject(userDetails.address, "Address");
            Validator.validateString(userDetails.address.city, "City");
            Validator.validateString(userDetails.address.street, "Street");
            Validator.validateString(userDetails.address.houseNumber, "House number");
            Validator.validateString(userDetails.address.postalCode, "Postal code");
            if (!Utils.notNull(userDetails.language)) {
                userDetails.language = Language.GERMAN;
            } else {
                userDetails.language = userDetails.language.toLowerCase();
            }
            userDetails.username = Utils.isEmpty(userDetails.username) ? Utils.getRandomId() : userDetails.username;
        } catch (err){
            var behavior = accountService.getActionBehavior(AccountActions.createAccount, AccountBehaviors.validationFailed);
            throw new Exception(behavior, err.message);
        }
        if (Utils.notNull(userDetails.image)) {
            Validator.validateLength(userDetails.image.length, Environments.properties.maxImageSize, "Image");
        }
        userDetails.email = userDetails.email.toLocaleLowerCase();
        var role = userDetails.email == Constants.SUPER_ADMIN ? StaticRole.ADMIN : StaticRole.USER;
        var type = userDetails.email == Constants.SUPER_ADMIN ? UserTypes.ADMIN : UserTypes.USER;
        var userPrivate: IPrivateUserDetails = <IPrivateUserDetails> {
            accesses: RoleManager.getDefaultUserPermissions(role),
            password: security.hashPassword(password),
            secret: new Secret(false),
            userType: type
        };
        var userId = Utils.getRandomId();
        var time = Utils.getTime();
        return <IUser> {
            userId: userId,
            cts: time,
            uts: time,
            createdBy: userId,
            updatedBy: userId,
            publicUserDetails: userDetails,
            privateUserDetails: userPrivate
        };
    }
}