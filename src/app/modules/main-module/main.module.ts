import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainRoutes } from './main.router';
import { RouterModule } from '@angular/router'; 

import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MainRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
