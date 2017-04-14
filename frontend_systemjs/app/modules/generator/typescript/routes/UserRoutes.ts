import {ModuleWithProviders}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../components/MainComponent";


// Route Configuration
export const routes: Routes = [
    {
        path: 'users',
        component: MainComponent,
        canActivate: [UserRoutesGuardService],
        children: []
            }
        ]
    }
];

export const UserRoutes: ModuleWithProviders = RouterModule.forChild(routes);

