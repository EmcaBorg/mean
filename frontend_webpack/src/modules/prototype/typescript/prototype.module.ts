import { NgModule } from '@angular/core';
import {PrototypeRoutes} from "./routes/prototype.routes.ts";
import {PrototypeComponent} from "./components/prototype.component";


@NgModule({
  imports: [PrototypeRoutes],
  declarations: [PrototypeComponent],
  exports:      [],
  providers: []
})

export class PrototypeModule {}


