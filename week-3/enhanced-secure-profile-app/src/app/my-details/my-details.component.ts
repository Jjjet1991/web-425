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

//Create new Person class.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
  //Construction with required parameters.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  //Print info to console
  toString() {
    console.log(`/n Full name: ${this.fullName}/n Favorite food: ${this.favoriteFood}/n Favorite color: ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile:Person;
  constructor() {
    //New Person information (fullName, favoriteFood, favoriteColor)
    this.myProfile= new Person("J.Neal", "Pretzel and Cheese", "Blue");
    //toString myProfile information.
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
