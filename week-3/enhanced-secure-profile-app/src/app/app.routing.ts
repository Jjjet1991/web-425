/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Creating guarding routes on enhanced-secure-profile app.
=====================================================
*/

//Import statement for Router, SignInComponent, and HomeComponent
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
//Import statement for the SignInGuard
import { SignInGuard } from './sign-in.guard';

//Create and export and array of Route objects
export const AppRoutes: Routes= [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //Add canActivate and pass in SignInGuard
    canActivate: [SignInGuard]
  }
]
