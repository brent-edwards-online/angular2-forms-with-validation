import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const MainRouter: Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    {
        path: 'auth',
        loadChildren: '../auth-module/auth.module#AuthModule'     // 
    },
    {
        path: 'tech',
        loadChildren: '../tech-module/tech.module#TechModule'     // 
    },
    {
        path: 'model',
        loadChildren: '../model-driven-module/model-driven.module#ModelDrivenModule'     // 
    },
    {
        path: 'template',
        loadChildren: '../template-driven-module/template-driven.module#TemplateDrivenModule'     // 
    },
];

export const MainRoutes: ModuleWithProviders = RouterModule.forRoot(MainRouter, {
                    //preloadingStrategy: PreloadAllModules
                });