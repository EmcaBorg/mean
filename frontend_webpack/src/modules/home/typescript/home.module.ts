import { NgModule } from '@angular/core';
import {HomeComponent} from "./components/home.component";
import {HomeRoutes} from "./routes/home.routes";
import {CoreModule} from "../../core/typescript/core.module";



@NgModule({
  imports: [HomeRoutes, CoreModule],
  declarations: [HomeComponent],
  exports:      [HomeComponent]
})

export class HomeModule { }


