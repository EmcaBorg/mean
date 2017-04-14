import {Injectable} from '@angular/core';
import {AbstractSession} from "../abstract/AbstractSession";
import {SessionConfig} from "../config/SessionConfig";


@Injectable()
export class SessionService extends AbstractSession{

    constructor() {
        super()
    }

    getUserId(): string {
        return super.getUserData()['userId'];
    }

    getUserType(): string {
        return super.getUserData()['userType'];
    }

    isSuperAdmin(): boolean {
        if (this.getUserData()['accesses']['superAdmin']) {
            return true;
        }
    }


  

  

    
  

   