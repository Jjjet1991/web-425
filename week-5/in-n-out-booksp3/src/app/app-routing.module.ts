/*
=====================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Using Angular Material to create data table.
=====================================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import statements for BookListComponent, ContactComponent, AboutComponent.
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //path for BookListComponent
  {
    path: '',
    component: BookListComponent
  },
  {
    path:'book-list',
    component: BookListComponent
  },
  //path for ContactComponent
  {
    path: 'contact',
    component: ContactComponent
  },
  //path for AboutComponent
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
