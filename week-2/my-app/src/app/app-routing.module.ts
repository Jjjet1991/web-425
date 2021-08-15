/*<!--
=====================================================
; Title: Assignment 2.2- Navigation
; Author: Professor Krasso
; Date 12 August 2021
; Modified By: Jourdan Neal
; Description: Using router-outlet for navigation to different routes.
=====================================================
*/

//Import statements
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Routes to each Component
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
