import {PublicEnvironment, MailEnvironment, Environment, Properties} from "../endpoints/endpoint";
export class Environments {
    static rest: PublicEnvironment = {
        name: "Rest",
        publicProtocol: "http",
        publicDomain: "localhost",
        publicIp: "127.0.0.1",
        publicPort: 88,
        protocol: "http",
        host: "localhost",
        port: 81
    };
    static mail: MailEnvironment = {
        name: "Mail",
        protocol: "smtps",
        host: "smtp.gmail.com",
        port: 465,
        user: "naturevtadev@gmail.com",
        password: "koliko123koliko",
        email: "naturevtadev@gmail.com"
    };
    static auth: Environment = {
        name: "Auth",
        protocol: "http",
        host: "localhost",
        port: 82,
        database: {
            url: 'mongodb://admin:admin@localhost:27017/trip'
        }
    };
    static user: Environment = {
        name: "User",
        protocol: "http",
        host: "localhost",
        port: 83,
        database: {
            url: 'mongodb://admin:admin@localhost:27017/trip'
        }
    };

    static properties: Properties = {
        logLevel: "DEBUG",
        imagesUrl: "../../../../web/public/build",
        maxImageSize: 250000
    }
}