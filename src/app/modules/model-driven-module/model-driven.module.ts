import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';

import { ModelDrivenRoutes } from "./model-driven.router";
import { RouterModule } from '@angular/router'; 

import { ModelComponent } from './component/model/model.component';
import { ModelDrivenComponent } from './component/model-driven/model-driven.component';

@NgModule({
  declarations: [
    ModelComponent,
    ModelDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModelDrivenRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [ModelComponent]
})
export class ModelDrivenModule { }