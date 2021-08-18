/*
=====================================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Re-naming application and components of composer-app.
=====================================================
*/
//Import statement for IComposer
import { throwError } from 'rxjs';
import { IComposer } from './composer.interface'
//Paste code from composer-list-component.ts

//Create new a Composer class
export class Composer {
  //Create composer array
  composers: Array<IComposer>;

  //Constructor with fullName and genre parameters.
  constructor(){
    //Copy list of composers from composer-list.
    this.composers = [
    { composerId: 100, fullName:"Hildegard of Bingen", genre: "Classical"
    },
    { composerId: 101, fullName:"Fanny Mendelssohn", genre: "Classical"
    },
    { composerId: 102, fullName:"Clara Schumann", genre: "Classical"
    },
    { composerId: 103, fullName:"Cecile Chaminade", genre: "Classical"
    },
    { composerId: 102, fullName: "Francessca Caccini", genre: "Opera"
    },

  ]
}
  //Create getComposers function
  getComposers(){
    return this.composers;
  }

  //Create getComposer function
  getComposer(composerId:number) {
    //for loop iterating through composers.
    for (let composer of this.composers) {
      if (composer.composerId === composerId){
      return composer;
      }
    }
  }
}
