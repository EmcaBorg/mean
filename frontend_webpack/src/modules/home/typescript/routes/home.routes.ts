import { ModuleWithProviders }  from '@angular/core';
import {RouterModule } from '@angular/router';
import {HomeComponent} from "../components/home.component";
import {Routes} from "../../../core/typescript/abstract/routes.interface";


// Route Configuration
export const routes: Routes = [
  {path: '', component: HomeComponent}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const HomeRoutes: ModuleWithProviders = RouterModule.forRoot(routes)
