import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthComponent} from './modules/auth/typescript/components/auth.component'


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AuthComponent],
    bootstrap:    [ AuthComponent]
})
export class AppModule { }
