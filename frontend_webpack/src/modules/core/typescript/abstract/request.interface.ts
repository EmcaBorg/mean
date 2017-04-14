export interface IHttpConfig {
    endpoint: string,
    requestData: IRequestData,
    access: string
}


export interface IRequestData {
    path?: string,
    method?: string;
    search?: [string, string],
    headers?: Array<IHeaders>,
    body?: any,
    extendPath?: string
}


export interface IHeaders {
    headerKey: string,
    headerValue: string
}

