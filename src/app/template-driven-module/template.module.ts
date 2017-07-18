import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TemplateRoutes } from "./template.router";
import { RouterModule } from '@angular/router'; 

import { TemplateComponent } from './component/template/template.component';
import { FrameworkComponent } from './component/framework/framework.component';

@NgModule({
  declarations: [
    TemplateComponent,
    FrameworkComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    TemplateRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class TemplateModule { }