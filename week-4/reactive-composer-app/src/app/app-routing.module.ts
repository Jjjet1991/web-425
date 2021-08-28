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
