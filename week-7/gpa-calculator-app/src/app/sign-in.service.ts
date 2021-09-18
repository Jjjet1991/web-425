/*
=====================================================
; Title: Assignment 7.3 Form Validation
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Add data validation to the gpa-calculator-app, sign-in page.
=====================================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  //Create variable studentId, which will be array of numbers
  studentId: Array<number>;
  constructor() {
    //Assign student Id predetermined values
    this.studentId= [1007, 1008, 1009, 1010, 1011, 1012];
   }
   //Create new function validate takes in studentId number
   validate(studentId:number){
     //Looking that studentId matches one of the predetermined values.
     return this.studentId.some(id => id === studentId);

   }
}
