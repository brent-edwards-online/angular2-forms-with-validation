import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechComponent } from './component/tech/tech.component';
import { FrameworkComponent } from './component/framework/framework.component';

export const TechRouter: Routes = [
  {
    path: '',
    component: TechComponent,  
    children: [
        { 
            path: '', 
            redirectTo: 'framework', 
            pathMatch: 'full' 
        },
        { 
            path: 'framework', 
            component: FrameworkComponent 
        }
    ]
  }
];

export const TechRoutes: ModuleWithProviders = RouterModule.forChild(TechRouter);