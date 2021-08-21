  /*
  =====================================================
  ; Title: Assignment 3.3 Passing Data Routes Part 2
  ; Author: Professor Krasso
  ; Date 22 August 2021
  ; Modified By: Jourdan Neal
  ; Description: Using Routes to pass data and create router guards.
  =====================================================
  */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Change title to Secure Profile App
    assignment:string = 'Secure Profile App'
}
