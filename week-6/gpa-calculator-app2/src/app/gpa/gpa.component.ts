/*
=====================================================
; Title: Assignment 6.4- Input Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Using Input() properties and flexLayouts to create GPA Calculator.
=====================================================
*/

//Add Input property
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  //Input gpaTotal type number
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
