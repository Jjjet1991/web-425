/*
=====================================================
; Title: Assignment 9.3 Bob's Computer Repair Deliverable
; Author: Professor Krasso
; Date 3 October 2021
; Modified By: Jourdan Neal
; Description: Creating application to total user selected services from checkbox and add in values
; for user inputted cost for parts and labor. Return a summary of all the charges to the user as
; a dialogue box.
=====================================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
