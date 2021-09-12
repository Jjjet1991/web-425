/*
=====================================================
; Title: Assignment 6.4- Input Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Using Input() properties and flexLayouts to create GPA Calculator.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
//Import ITranscript
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //Create transcriptEntry variable
  transcriptEntry: ITranscript;
  //Create selectableGrades variable, value string with grade values
  selectableGrades: Array<string> = ['A','A-','B', 'B+', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  //Creat transcriptEntries set to ITranscriptArray
  transcriptEntries: Array<ITranscript> = [];

  //Create new variable gpaTotal number type and set initial value to zero
  gpaTotal:number = 0;


  constructor() {
    //Create empty ITranscripts object and assign it to transcriptEntry variable
    this.transcriptEntry = {} as ITranscript;
   }

  ngOnInit(): void {
  }
  //Create saveEntry function, push this.transcriptEntry to the transcriptEntries array,
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    //Set this.transcriptEntries to empty object.
    this.transcriptEntry = {} as ITranscript;
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
