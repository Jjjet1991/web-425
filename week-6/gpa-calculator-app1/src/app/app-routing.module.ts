/*
=====================================================
; Title: Assignment 6.3 Layouts
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Re-usable layouts-auth-layout and base-layout, re-useable layouts w/ different routes(including chlildren).
=====================================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    ]
  },
  //Session path w/ not found child
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
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
