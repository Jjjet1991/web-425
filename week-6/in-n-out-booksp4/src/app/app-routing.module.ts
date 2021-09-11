/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
=====================================================
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import statements for BookListComponent, ContactComponent, AboutComponent.
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Add import statement for Wishlist Component.
import { WishlistComponent } from './wishlist/wishlist.component';

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
  },
  //add path for WishlistComponent
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
