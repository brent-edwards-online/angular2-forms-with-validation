import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './component/template/template.component';
import { FrameworkComponent } from './component/framework/framework.component';

export const TemplateRouter: Routes = [
  {
    path: '',
    component: TemplateComponent,  
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

export const TemplateRoutes: ModuleWithProviders = RouterModule.forChild(TemplateRouter);