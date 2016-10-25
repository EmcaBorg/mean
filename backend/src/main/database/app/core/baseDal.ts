import {Utils} from "../../../common/app/utils";
import {Logger} from "log4js";
import * as mongoose from 'mongoose';
import {IModel} from "./model";

export class BaseDal {
    log:Logger = Utils.getLogger("Database");

    findEntryList(source: mongoose.Model<any>, filter: any, failed: (err: any) => void, success: (data: any[], totalCount: number) => void, entry: string): void {
        failed = failed ? failed : function () {};
        success = success ? success : function () {};
        filter = filter ? filter : {};
        var log = this.log;
        var skip = Utils.isNumber(filter.skip) ? filter.skip : 0;
        var limit = Utils.isNumber(filter.limit) ? filter.limit : 1000;
        delete filter.skip;
        delete filter.limit;
        if (Utils.notNull(source)) {
            source.find(filter, function (err: any, data: any[]) {
                if (err) {
                    log.error(err, err);
                    failed(err);
                } else {
                    if (Utils.notNull(data) && data.length != 0) {
                        source.count(filter, function (err: any, count: number) {
                            if (err) {
                                log.error(err, err);
                                failed(err);
                            } else {
                                success(data, count);
                            }
                        });
                    } else {
                        failed(entry + "'s with filter " + JSON.stringify(filter) + " not found");
                    }
                }
            }).skip(skip).limit(limit);
        } else {
            failed("Source is null");
        }
    }

    findEntry(source: mongoose.Model<any>, filter: any, failed: (err: any) => void, success: (data: any) => void, entry: string): void {
        failed = failed ? failed : function () {};
        success = success ? success : function () {};
        var log = this.log;
        if (Utils.notNull(source)) {
            source.findOne(filter, function (err: any, data: any) {
                if (err) {
                    log.error(err, err);
                    failed(err);
                } else {
                    if (Utils.notNull(data)) {
                        success(data);
                    } else {
                        failed(entry + " with filter " + filter + " not found");
                    }
                }
            });
        } else {
            failed("Source is null");
        }
    }

    removeEntry(source: mongoose.Model<any>, filter: any, failed: (err: any) => void, success: () => void): void {
        failed = failed ? failed : function () {};
        success = success ? success : function () {};
        var log = this.log;
        if (Utils.notNull(source)) {
            source.remove(filter, function (err: any) {
                if (err) {
                    log.error(err, err);
                    failed(err);
                } else {
                    success();
                }
            });
        } else {
            failed("Source is null");
        }
    }

    createEntry(source: mongoose.Model<any>, model: IModel, failed: (err: any) => void, success: () => void): void {
        failed = failed ? failed : function () {};
        success = success ? success : function () {};
        var log = this.log;
        if (Utils.notNull(source)) {
            var newModel = new source(model);
            newModel.save(function (err: any) {
                if (err) {
                    log.error(err, err);
                    failed(err);
                } else {
                    success();
                }
            });
        } else {
            failed("Source is null");
        }
    }

    saveEntry(model: mongoose.Document, failed: (err: any) => void, success: () => void): void {
        failed = failed ? failed : function () {};
        success = success ? success : function () {};
        var log = this.log;
        if (Utils.notNull(model)) {
            model.save(function (err: any) {
                if (err) {
                    log.error(err, err);
                    failed(err);
                } else {
                    success();
                }
            });
        } else {
            failed("Model is null");
        }
    }
}