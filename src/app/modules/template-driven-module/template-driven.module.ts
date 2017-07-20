import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutes } from "./template-driven.router";
import { RouterModule } from '@angular/router'; 

import { TemplateComponent } from './component/template/template.component';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';

@NgModule({
  declarations: [
    TemplateComponent,
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TemplateDrivenRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class TemplateDrivenModule { }