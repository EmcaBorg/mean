import {Injectable, Inject} from '@angular/core';
import {TRANSLATIONS} from './Translations';

@Injectable()
export class TranslateService {

    private _currentLang: string;

    public get currentLang() {
        return this._currentLang;
    }

    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang: string): void {
        this._currentLang = lang;
    }

    private translate(key: string): string {
        let keys = key.split('.');
        let lastObj: any;
        let translations = this._translations[this.currentLang];
        let translation: string;
        keys.forEach((k, index) => {
            if(!lastObj) {
                lastObj = translations[k];
            }
            else{
                if(index === keys.length - 1){
                    translation = lastObj[k];
                }
                if(lastObj){
                    lastObj = lastObj[k]
                }
            }
        });
        return translation;
    }

    public instant(key: string) {
        return this.translate(key);
    }
}