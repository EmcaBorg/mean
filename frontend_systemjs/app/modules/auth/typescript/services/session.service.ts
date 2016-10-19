import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {StorageService} from "../../../common/typescript/services/storage.abstract.service";

@Injectable()
export class SessionService extends StorageService{
    constructor(){
        super("Emca", 23);
    }


    setSession():void {
    }
}