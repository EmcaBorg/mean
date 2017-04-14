import {ModuleWithProviders}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../components/MainComponent";
// Route Configuration
export const routes: Routes = [
    {
        path: 'admins',
        component: MainComponent,
        canActivate: [AdminRoutesGuardService],
        children: []
           
       
    },
];

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild(routes);
