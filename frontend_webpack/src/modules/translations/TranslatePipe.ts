import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from './TranslateService';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) {
    }

    transform(value: string, count: number, sinplu: string): any {
        if (!value) return;
        if(count <= 1) {
            return this._translate.instant(value)[0];
        }
        else if(count > 1) {
            return this._translate.instant(value)[1];
        }
        return this._translate.instant(value);
    }
}