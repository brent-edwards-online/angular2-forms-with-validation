import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechRoutes } from "./tech.router";
import { RouterModule } from '@angular/router'; 

import { TechComponent } from './component/tech/tech.component';
import { FrameworkComponent } from './component/framework/framework.component';

@NgModule({
  declarations: [
    TechComponent,
    FrameworkComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    TechRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [TechComponent]
})
export class TechModule { }