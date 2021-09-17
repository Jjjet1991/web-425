/*
=====================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Using Reactive Forms to create Sign-In guard for GPA Calculator.
=====================================================
*/
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 //Create two class fields signinForm and errorMessage
  signinForm: FormGroup;
  errorMessage: string;
//Pass in router, cookie service, formBuilder
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }

  ngOnInit(): void {
    //Using form builder to build a group for studentId
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

   //onSubmit capture the form values.
  onSubmit() {
    const formValues = this.signinForm.value;
    //Parse string value to integer of studentId
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
       //If the studentId is valid, take to home screen
      this.router.navigate(['/'])
    } else {
      //If studentId does not match, then display error message.
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}
