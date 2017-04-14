export interface EndPoint {
  protocol: string,
  host: string,
  port: number,
  path: string,
}

export class EndPoints {

  public static  AUTH: EndPoint = {
    protocol: 'http',
    host: 'localhost',
    port: 88,
    path: '/api/v1/auth'

  }

  public static USERS: EndPoint = {
    protocol: 'http',
    host: 'localhost',
    port: 88,
    path: '/api/v1/users'
  }

}


