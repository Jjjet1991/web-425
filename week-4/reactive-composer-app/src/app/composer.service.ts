/*
=====================================================
; Title: Assignment 4.4 Async PipeLine
; Author: Professor Krasso
; Date 28 August 2021
; Modified By: Jourdan Neal
; Description: Using observables and build reactive application.
=====================================================
*/

import { Injectable } from '@angular/core';

//import statement for IComposer
import { IComposer } from './composer.interface';


//Add import statements for Observable and of from rxjs
import { Observable} from 'rxjs';
import { of } from 'rxjs';

//Add import statement for map operator
import { map } from 'rxjs/operators';

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
     }
   ]
 }

 //Update return type of getComposers function, return observable array of IComposer objects
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  //getComposer function, with composerId data passed.
   getComposer(composerID: number){
     for (let composer of this.composers){
       if (composer.composerId === composerID){
         return composer;
       }
     }
   }

   //Create new function called filterComposers(name:String), return type Observable<IComposer[]>
   filterComposers(name: string): Observable<IComposer[]> {
     return of(this.composers).pipe(
       //pipe(): allows chaining functions
       //map(): return a new array of objects
       //filter(): filter array of data
       map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
   }
}
