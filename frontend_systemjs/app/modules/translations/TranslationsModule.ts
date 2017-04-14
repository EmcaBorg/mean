import {NgModule} from '@angular/core';
import {TRANSLATION_PROVIDERS} from "./Translations";
import {TranslateService} from "./TranslateService";
import {TranslatePipe} from "./TranslatePipe";

@NgModule({
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
    providers: [TRANSLATION_PROVIDERS, TranslateService]
})
export class TranslationsModule {

}