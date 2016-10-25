import * as mongoose from 'mongoose';
import {Dal} from "./app/dal";
import {Utils} from "../common/app/utils";
export * from './app/users/model/user';
export * from './app/users/model/role';

export class Database {
    constructor() {
        mongoose.connection.on('error', function(err) {
            var log = Utils.getLogger("Database");
            log.error('MongoDb error: %s', JSON.stringify(err));
        });
    }
    static connected = false;
    static connect(url: string, environment: string, success?: ()=>void): void {
        mongoose.connect(url, {}, function (err: any) {
            var log = Utils.getLogger("Database");
            if (err) {
                log.error("Connection error: %s", JSON.stringify(err));
            } else {
                Database.connected = true;
                log.info('Connection to MongoDB successfully established for environment: "' + environment + '".');
                if (Utils.notNull(success)) {
                    success();
                }
            }
        });
    }
    static dal: Dal = new Dal();
}