/*
=====================================================
; Title: Assignment 4.2 Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date 27 August 2021
; Modified By: Jourdan Neal
; Description: Using built in Dependency Injectors to create instance of service.
=====================================================
*/

import { Injectable } from '@angular/core';

//import statement for IComposer
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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
