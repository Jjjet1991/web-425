/*
=====================================================
; Title: Assignment Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date  August 2021
; Modified By: Jourdan Neal
; Description: Re-naming application and components of composer-app, passing data routes.
=====================================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import statements for Composer List, About, Contact
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
    //Adding new path for composerDetails
    {
      path: 'composer-details/:composerId',
      component: ComposerDetailsComponent
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
