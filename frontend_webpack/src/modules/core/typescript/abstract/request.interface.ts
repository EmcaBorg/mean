import { RequestOptions } from '@angular/http';


export interface IRequestData{
  url?: string,
  method?: string;
  search?: [string, string],
  headers?: Array<IHeaders>,
  body?: string
}


interface IHeaders{
  headerKey: string,
  headerValue: string
}

