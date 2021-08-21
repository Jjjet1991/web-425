/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Creating guarding routes on enhanced-secure-profile app.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
//import statement for Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //Create isLoggedIn variable, Boolean value of false.
  isLoggedIn = false;

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  //Create signin function.
  signin(){

    this.isLoggedIn = true;
    //If logged in is true, navigate to home page.
    this.router.navigate(['/home'], {queryParams:{isLoggedIn:this.isLoggedIn}, skipLocationChange:true})
  }
}
