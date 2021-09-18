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
//Import ITranscript
import { ITranscript } from '../transcript.interface';
//Add Import statements for FormGroup, FormBuilder, Validators
import { FormGroup, FormBuilder, Validator, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Create selectableGrades variable, value string with grade values
  selectableGrades: Array<string> = ['A','A-','B', 'B+', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  //Creat transcriptEntries set to ITranscriptArray
  transcriptEntries: Array<ITranscript> = [];

  //Create new variable gpaTotal number type and set initial value to zero
  gpaTotal:number = 0;

  //Add new transcriptForm variable FormGroup Type
  transcriptForm: FormGroup;

  //Add FormBuilder to the components constructor
  constructor( private fb:FormBuilder) {

   }

  ngOnInit(): void {
  //Use formBuilder to build a new FormGroup with two FormControls
  this.transcriptForm= this.fb.group({course: ["", Validators.required],
  grade:["", Validators.required]});
  }
  //get form that returns the transcriptForm control
  get form() {return this.transcriptForm.controls;}
  //Create saveEntry function, push this.transcriptEntry to the transcriptEntries array.
  //Change saveEntry to onSubmit and add event parameter
  onSubmit(event) {
    this.transcriptEntries.push({
      //Push new object literal to the transcriptEntries array using captured values
      course:this.form.course.value,
      grade:this.form.grade.value
    });
    //Use event object to reset Validation
    event.currentTarget.reset();
  }

  //Create calculate results function
  calculateResults(){
    //Add local gpa variable
    let gpa: number = 0

    //Add a for loop and iterate over the transcriptEntries array
    for (let entry of this.transcriptEntries){
      switch(entry.grade){
        case 'A': gpa+=4.0;
        break;
        case 'A-': gpa+=3.7;
        break;
        case 'B+': gpa+=3.33;
        break;
        case 'B': gpa+=3.00;
        break;
        case 'B-': gpa+=2.70;
        break;
        case 'C+': gpa+=2.30;
        break;
        case 'C': gpa+=2.00;
        break;
        case 'C-': gpa+=1.70;
        break;
        case 'D+': gpa+=1.30;
        break;
        case 'D': gpa+=1.00;
        break;
        case 'D-': gpa+=0.70;
        break;
        case 'F': gpa+=0.00;
        break;
        default:
          gpa+= 0.00;
          break;
      }
    }
    //Divide gpa against transcriptEntries.length, assign to gpaTotal variable.
    this.gpaTotal= gpa/ this.transcriptEntries.length;
  }

  //New function clearEntries
  clearEntries(){
    //Create an empty array for this.transcriptEntries, this will clear the selection/gpaTotal.
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
