import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthRoutes } from "./auth.router";
import { RouterModule } from '@angular/router'; 

import { LoginComponent } from './component/login/login.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AuthRoutes,
    RouterModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
