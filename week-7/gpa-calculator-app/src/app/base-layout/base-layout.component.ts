/*
=====================================================
; Title: Assignment 7.3 Form Validation
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Add data validation to the gpa-calculator-app, sign-in page.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
//Import CookieService and Router
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  //Assignment variable with string value
  assignment: String;

  constructor(private cookieService: CookieService, private router: Router) {
    //Assign assignment name to the assignment variable.
    this.assignment="GPA Calculator"
   }

  ngOnInit(): void {
  }

  //Create new sign-out function
  signOut(){
    this.cookieService.deleteAll();
    //Return user to the sign-in route
    this.router.navigate(['/session/sign-in']);
  }

}
