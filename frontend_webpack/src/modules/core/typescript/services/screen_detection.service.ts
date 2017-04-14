import {Injectable} from '@angular/core';
import {ScreenTypes} from "../config/ScreenTypes";

@Injectable()
export class ScreenDetectionService {

    constructor() {
    }

    public detectScreenType(width: number): string {
        switch (true) {
            case (width >= 300 && width < 768):
                return ScreenTypes.XS;
            case (width >= 768 && width < 992):
                return ScreenTypes.SM;
            case (width >= 992 && width < 1500):
                return ScreenTypes.MD;
            case (width >= 1501):
                return ScreenTypes.LG;
        }
    }
}