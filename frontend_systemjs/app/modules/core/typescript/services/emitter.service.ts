import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import {IEmitter} from "../config/Commands";

@Injectable()
export class EmitterService {

    constructor() {
    }

    public emitter: ReplaySubject<any> = new ReplaySubject(1);

    public emit(subject: IEmitter): void {
        this.emitter.next(subject);
    }

    /***
     *  RECIVER
     *  this.subscription =  this.emitterService.emitter.subscribe((data)=>{
            console.log(data);
           })
     */


}