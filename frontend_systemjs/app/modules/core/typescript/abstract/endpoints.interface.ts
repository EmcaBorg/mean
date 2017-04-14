export interface IEndPoints {
    [key: string]: IEndPoint
}

export interface IEndPoint {
    protocol: string,
    host: string,
    port: number,
    path: string,
    relativePath: boolean
}
