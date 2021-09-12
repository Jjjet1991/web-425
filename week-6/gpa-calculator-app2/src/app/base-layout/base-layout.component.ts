/*
=====================================================
; Title: Assignment 6.4- Input Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Using Input() properties and flexLayouts to create GPA Calculator.
=====================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  //Assignment variable with string value
  assignment: String;

  constructor() {
    //Assign assignment name to the assignment variable.
    this.assignment="Exercise 6.4 - Input Properties"
   }

  ngOnInit(): void {
  }

}
