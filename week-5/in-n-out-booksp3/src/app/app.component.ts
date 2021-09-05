/*
=====================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Using Angular Material to create data table.
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
    this.assignment = 'Exercise 5.3 - Data Tables'
  }
}
