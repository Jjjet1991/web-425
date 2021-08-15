/*
=====================================================
; Title: Assignment 2.4 Routing in Action
; Author: Professor Krasso
; Date 13 August 2021
; Modified By: Jourdan Neal
; Description: Composer application routes to Home, About, Contact.
=====================================================
*/

import { Component, OnInit } from '@angular/core';

//Create new a Composer class
export default class Composer {
  fullName: string;
  genre: string;

  //Constructor with fullName and genre parameters.
  constructor(fullName:string, genre:string){
    this.fullName = fullName,
    this.genre = genre
  }

  //Log info to Console.
  toString(){
    console.log(`/n full name: ${this.fullName} /n ${this.genre}`)
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {

  //Create new composers variable with array value.
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Hildegard of Bingen", "Classical"),
      new Composer("Fanny Mendelssohn", "Classical"),
      new Composer("Clara Schumann", "Classical"),
      new Composer("Cecile Chaminade", "Classical"),
      new Composer("Francessca Caccini", "Opera")
    ]
   }

  ngOnInit(): void {
  }

}
