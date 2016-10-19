import { ModuleWithProviders }  from '@angular/core';
import {RouterModule } from '@angular/router';
import {PrototypeComponent} from "../components/prototype.component.ts";
import {Routes} from "../../../core/typescript/abstract/routes.interface";

// Route Configuration
export const routes: Routes = [
  {
    path: 'users',
    component: PrototypeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'child-route', component: null },

        ],
      }
    ]
  }
];

export const PrototypeRoutes: ModuleWithProviders = RouterModule.forChild(routes)
