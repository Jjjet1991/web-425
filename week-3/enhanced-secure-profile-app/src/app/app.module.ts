/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Creating guarding routes on enhanced-secure-profile app.
=====================================================
*/



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

//Import statements for AppRoutes and RouterModule
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //Call RouterModule and pass in AppRoutes
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
