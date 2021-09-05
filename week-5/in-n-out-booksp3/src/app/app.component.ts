/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Create assignment variable: string
  assignment: string;
  constructor(){
    this.assignment = 'Exercise 5.4 - Dialogs'
  }
}
