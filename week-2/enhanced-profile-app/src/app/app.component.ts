/*<!--
=====================================================
; Title: Assignment 2.3 Data Binding
; Author: Professor Krasso
; Date 8 August 2021
; Modified By: Jourdan Neal
; Description: Building new Person class to enhance profile-app.
=====================================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:Boolean = true;
  assignment:string = 'Assignment 2.3- Data Binding'
}
