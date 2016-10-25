
export interface Environment {
    name: string;
    protocol: string,
    host: string,
    port: number,
    database?: DatabaseEnvironment;
}

export interface PublicEnvironment extends Environment {
    publicProtocol: string;
    publicDomain: string;
    publicIp: string;
    publicPort: number;
}

export interface MailEnvironment extends Environment {
    user: string;
    password: string;
    email: string;
}

export interface DatabaseEnvironment {
    url: string;
}

export interface Properties {
    logLevel: string;
    imagesUrl: string;
    maxImageSize: number;
}