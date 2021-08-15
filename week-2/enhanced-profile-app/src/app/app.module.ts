/*<!--
=====================================================
; Title: Assignment 2.3 Data Binding
; Author: Professor Krasso
; Date 8 August 2021
; Modified By: Jourdan Neal
; Description: Building new Person class to enhance profile-app.
=====================================================
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
