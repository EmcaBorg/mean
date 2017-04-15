import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import { Subscriber } from 'rxjs';

export class RouterExtractor {

    static extractURL(activatedRoute: ActivatedRoute): Observable<string> {
        let url: Observable<any>;
        activatedRoute.url.subscribe((urlSegments)=> {
            url = new Observable((observer: Subscriber<string>) => {
                urlSegments.map((urlSegment: any) => {
                    observer.next(urlSegment.path)
                });
            });
        });
        return url;
    }

    static extractParams(activatedRoute: ActivatedRoute, paramKey: string): Observable<string> {
        let param: Observable<any>;
        activatedRoute.params.subscribe((params)=> {
            param = new Observable((observer: Subscriber<string>) => {
                observer.next(params[paramKey])
            })
        });
        return param;
    }

    static combineURLs(urlSegments: Observable<string>): string{
        let urlCombined = '';
        urlSegments.subscribe((urlSegment: string) => {
            urlCombined += urlSegment + '/';
        });
        return urlCombined;
    }
}