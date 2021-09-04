/*
=====================================================
; Title: Assignment 4.4 Async PipeLine
; Author: Professor Krasso
; Date 28 August 2021
; Modified By: Jourdan Neal
; Description: Using observables and build reactive application.
=====================================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
//Import RouterModule
import { Router, RouterModule } from '@angular/router';
//Import FormsModule and ReactiveFormsModule from Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Import RouterModule to imports array.
    RouterModule,
    //Import FormsModule and ReactiveFormsModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
