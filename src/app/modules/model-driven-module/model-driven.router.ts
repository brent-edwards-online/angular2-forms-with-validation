import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelComponent } from './component/model/model.component';
import { ModelDrivenComponent } from './component/model-driven/model-driven.component';

export const ModelDrivenRouter: Routes = [
  {
    path: '',
    component: ModelComponent,  
    children: [
        { 
            path: '', 
            redirectTo: 'model-driven', 
            pathMatch: 'full' 
        },
        { 
            path: 'model-driven', 
            component: ModelDrivenComponent 
        }
    ]
  }
];

export const ModelDrivenRoutes: ModuleWithProviders = RouterModule.forChild(ModelDrivenRouter);