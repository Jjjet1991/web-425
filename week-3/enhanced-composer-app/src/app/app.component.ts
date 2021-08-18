/*
=====================================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Re-naming application and components of composer-app.
=====================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Changing the title of the assignment.
  title = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
