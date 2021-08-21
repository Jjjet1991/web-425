/*
=====================================================
; Title: Assignment 1.3 Angular CLI
; Author: Professor Krasso
; Date 14 August 2021
; Modified By: Jourdan Neal
; Description: Creating Hello-World using Agular CLI.
=====================================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
