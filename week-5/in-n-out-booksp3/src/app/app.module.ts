/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Import statements for toolbar, button, icon, flex-module, list-module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

//Import statements for MatTableModule
import {MatTableModule } from '@angular/material/table';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';

//Import statement for Dialog Module
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutComponent,
    ContactComponent,
    BookDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Add imported modules
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,

    //Add imported modules exercise 5.3
    MatTableModule,

    //Add imported dialog module
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
