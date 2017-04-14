import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TransporterService} from "./TransporterService";
import {SessionService} from "./SessionService";
import {SessionConfig} from "../config/SessionConfig";
import {AuthService} from "../../../operations/modules/users/typescript/services/AuthService";


@Injectable()
export class UserRoutesGuardService implements CanActivate {

    constructor(private authService: AuthService, private sessionService: SessionService, private router: Router,  private transporterService: TransporterService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sessionService.getSession() && (this.sessionService.getUserType() === SessionConfig.USER_TYPES.USER)) {
            return true;
        }
        this.transporterService.setData('redirectUrl', state.url);
        this.router.navigate(['/sign-in']);
        return false;
    }
}