import {Injectable} from '@angular/core';
import {Http, Request, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {URLException} from '../exceptions/URLException';
import {Regex} from '../config/regex.config'
import {IRequestData} from '../abstract/request.interface';


@Injectable()
export class RestService {

  constructor (private http: Http) {}

  private generateRequest(requestData: IRequestData ): Request{
    let requestOptions: RequestOptions = null;
    if(requestData.hasOwnProperty('url')){
      if(!requestData.url.match(Regex.URL_VALIDATOR)){
        throw new URLException("Provide valid URL");
      }
      else{
        requestOptions = new RequestOptions({
          url: requestData.url
        });
      }
    }
    if(requestData.hasOwnProperty('method')){
      requestOptions.merge({method: requestData.method});
    }
    if(requestData.hasOwnProperty('search')){
      let searchParams: URLSearchParams = new URLSearchParams();
      searchParams.set(requestData.search[0], requestData.search[1]);
      requestOptions.merge({search: searchParams});
    }
    if(requestData.hasOwnProperty('headers')){
      let headers: Headers = new Headers();
      requestData.headers.forEach(function(key, index){
        headers.append(requestData.headers[index].headerKey, requestData.headers[index].headerValue);
      });
      requestOptions.merge({headers: headers});
    }
    if(requestData.hasOwnProperty('body')){
      requestOptions.merge({body: JSON.stringify(requestData.body)});
    }
    return new Request(requestOptions);
  }


  public sendRequest(requestData: IRequestData) : Observable<any[]> {
    let requestPrepared: Request = this.generateRequest(requestData);
    return this.http.request(requestPrepared).map((res:Response) => res.json())
  }
}
