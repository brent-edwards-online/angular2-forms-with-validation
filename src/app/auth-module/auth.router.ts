import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './component/auth/auth.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';

export const AuthRouter: Routes = [
  {
    path: '',
    component: AuthComponent,  
    children: [
        { 
            path: '', 
            redirectTo: 'login', 
            pathMatch: 'full' 
        },
        { 
            path: 'login', 
            component: LoginComponent 
        },
        { 
            path: 'register', 
            component: RegisterComponent 
        },
        { 
            path: 'logout', 
            component: LogoutComponent 
        }
    ]
  }
];

export const AuthRoutes: ModuleWithProviders = RouterModule.forChild(AuthRouter);