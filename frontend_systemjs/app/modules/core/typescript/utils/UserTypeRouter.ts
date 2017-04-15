import {Router} from '@angular/router';
import {SessionConfig} from "../config/SessionConfig";
import {DEFAULT_ROUTES} from "../config/Constants";

export class UserTypeRouter {

    public static navigate(router: Router, userType: string) {
        switch (userType) {
            case SessionConfig.USER_TYPES.USER:
                router.navigate([DEFAULT_ROUTES.USER]);
                break;
            case SessionConfig.USER_TYPES.ADMIN:
                router.navigate([DEFAULT_ROUTES.ADMIN]);
                break;
           }

    }


}