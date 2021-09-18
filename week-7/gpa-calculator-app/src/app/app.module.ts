/*
=====================================================
; Title: Assignment 7.3 Form Validation
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Add data validation to the gpa-calculator-app, sign-in page.
=====================================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

//Import MatToolbarModule, FlexLayoutModule, MatCardModule, and MatButtonModule
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GpaComponent } from './gpa/gpa.component';
import { GradeSummaryComponent } from './grade-summary/grade-summary.component';

//Import statements MatFormFieldModule, MatInputModule, MatListModule, FormsModule, MatSelectModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { MatSelectModule } from '@angular/material/select';
import { SignInComponent } from './sign-in/sign-in.component';
//Import statements CookieService, FormsModule, ReactiveFormsModule
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BaseLayoutComponent,
    NotFoundComponent,
    HomeComponent,
    GpaComponent,
    GradeSummaryComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Add imports to array
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,

    //Add imports
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatSelectModule,

    //Add ReactiveFormsModule
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
