import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {HomeModule} from "./home/typescript/home.module.ts";
import {AppComponent} from "./app.component";
import {RouterModule } from '@angular/router';
import {CoreModule} from "./core/typescript/core.module";
import {PrototypeModule} from "./prototype/typescript/prototype.module";

//CSS imports
import './home/style/auth.css';
import './core/style/core.css';

// Module Composite Pattern
@NgModule({
  imports: [BrowserModule, RouterModule, CoreModule, HomeModule, PrototypeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModules { }
