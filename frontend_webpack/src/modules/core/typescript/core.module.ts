import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {LoginComponent} from "./components/login.component";
import {RestService} from "./services/rest.service";


@NgModule({
  imports: [HttpModule],
  declarations: [],
  exports:      [],
  providers: [RestService]
})

export class CoreModule {}


