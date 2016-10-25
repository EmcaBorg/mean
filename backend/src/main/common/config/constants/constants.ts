export class Constants {

    static API = 'api';
    static VERSION = 'v1';
    static SLASH = '/';

    static AUTH = "User-Auth";
    static LOCATION = "Location";
    static PUBLIC = "PUBLIC";
    static CONTENT = "Content-Type";
    static JSON = "application/json; charset=utf-8";

    static MINUTE_IN_MS = 1000 * 60;
    static HOUR_IN_MS = Constants.MINUTE_IN_MS * 60;
    static DAY_IN_MS = Constants.HOUR_IN_MS * 24;
    static YEAR_IN_MS = Constants.DAY_IN_MS * 365;
    static SESSION_DURATION_MS = 12 * Constants.HOUR_IN_MS;
    static RESET_PASSWORD_IDENTIFICATION_DURATION_MS = Constants.HOUR_IN_MS;
    static REQUEST_TIMEOUT = 5000;
    static IMAGES_FOLDER = "images";
    static SUPER_ADMIN = "akif.hadziabdic@hotmail.com";
    static ALLOWED_IMAGE_TYPES = [ "jpg", "png", "jpeg", "gif" ];
    static SECRET = '56sd4f65as4df5s4dfdf5sd65sd4f51a32ds1f6sd4g6df4hf1u2y316yt4u2';

    static DATABASE = {
        MODEL: {
            USER: "User",
            ROLE: "Role"
        }
    };
}