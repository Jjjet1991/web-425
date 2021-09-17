/*
=====================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Using Reactive Forms to create Sign-In guard for GPA Calculator.
=====================================================
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
//Import SignInGuard and SignInComponent
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard'

const routes: Routes = [
  //BaseLayoutComponent w/ HomeComponent child
  {
    path:'',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ],
    //Call canActivate SignIn Guard
    canActivate: [SignInGuard]
  },
  //Session path w/ not found child
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  //Re-direct path
  {
    path: "**",
    redirectTo: "session/not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
