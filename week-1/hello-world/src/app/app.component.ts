/*
=====================================================
; Title: Assignment 1.3 Angular CLI
; Author: Professor Krasso
; Date 14 August 2021
; Modified By: Jourdan Neal
; Description: Creating Hello-World using Agular CLI.
=====================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Re-name the title variable myWorld and assign new value.
  myWorld = "You are now in Jourdan Neal's World";
}
