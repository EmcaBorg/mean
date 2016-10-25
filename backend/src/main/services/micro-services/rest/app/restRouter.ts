import * as express from 'express';
import * as request from 'request';
import {Router, DefaultRoutes} from "../../../common-services/app/rest/router";
import {Environments} from "../../../../common/config/environments/environments";
import {Utils} from "../../../../common/app/utils";
import {Constants} from "../../../../common/config/constants/constants";
import {ServerApiDefinition} from "../../../../common/app/api/definitions/serverApiDefinition";
import {AuthApiDefinition} from "../../../../common/app/api/definitions/authApiDefinition";
import {UserApiDefinition} from "../../../../common/app/api/definitions/userApiDefinition";
import {ApiDefinition} from "../../../../common/app/api/apiDefinition";
import {AccountApiDefinition} from "../../../../common/app/api/definitions/accountApiDefinition";
import {Express} from "express";

export class RestRouter implements Router {

    constructor(public app: Express) {}

    route() {
        this.routeStaticData();
        this.routeMicroServices();
        this.roteDefault();
    }

    prepareRedirectRequest(properties, req) {
        var baseUrl = Utils.generateBaseUrl(properties);
        var url = baseUrl + req.originalUrl;
        var headers = {};
        headers[Constants.AUTH] = req.get(Constants.AUTH);
        headers[Constants.CONTENT] = Constants.JSON;
        return {
            uri: url,
            followRedirect: false,
            method: req.method,
            headers: headers,
            json: req.body
        };
    }

    returnData(res, error, response, body){
        if (!error && response != undefined) {
            res.set(response.headers);
            res.status(response.statusCode);
            res.send(body);
        } else {
            var status = ServerApiDefinition.notFoundBehavior;
            res.status(status.status);
            res.send(
                {
                    "code": status.code,
                    "time": Utils.getTime(),
                    "message": status.message
                }
            );
        }
    }

    redirect(req, res, properties) {
        var service = this;
        var requestObject = service.prepareRedirectRequest(properties, req);
        request(requestObject, function(error, response, body){
            service.returnData(res, error, response, body);
        });
    }

    routeStaticData() {
        this.app.use(express.static(this.getPublicData()));
    }

    routeMicroServices() {
        var service = this;
        var app = this.app;
        var apiDefinitions: ApiDefinition[] = [
            new AuthApiDefinition(),
            new UserApiDefinition(),
            new AccountApiDefinition()
        ];

        apiDefinitions.forEach(function (apiDefinition:ApiDefinition) {
            var basePath = Utils.getFullPath(apiDefinition.basePath + '*');
            Utils.getLogger('rest-routes').debug(basePath);
            app.use(basePath, function (req, res) {
                service.redirect(req, res, apiDefinition.environment);
            });
        });
    }

    roteDefault() {
        new DefaultRoutes(this.app).configureRoutes();
    }

    getPublicData() {
        return __dirname + '/../../../../../../../web/public/build';
    }
}