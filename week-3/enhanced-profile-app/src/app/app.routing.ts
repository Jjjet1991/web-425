/*<!--
=====================================================
; Title: Assignment 3.3 Passing Data Routes Part 2
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Using Routes to pass data and create router guards.
=====================================================
*/

//Import statement for Router, SignInComponent, and HomeComponent
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

//Create and export and array of Route objects
export const AppRoutes: Routes= [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent

  }
]
