import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './component/template/template.component';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';

export const TemplateDrivenRouter: Routes = [
  {
    path: '',
    component: TemplateComponent,  
    children: [
        { 
            path: '', 
            redirectTo: 'template-driven', 
            pathMatch: 'full' 
        },
        { 
            path: 'template-driven', 
            component: TemplateDrivenComponent 
        }
    ]
  }
];

export const TemplateDrivenRoutes: ModuleWithProviders = RouterModule.forChild(TemplateDrivenRouter);