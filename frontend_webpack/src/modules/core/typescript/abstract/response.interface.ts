export interface IResponse {
    code: string,
    data: any,
    time: number,
    message: string,
    description: string
}

export interface IResponseCallback {
    (err: boolean, response: any): void
}



