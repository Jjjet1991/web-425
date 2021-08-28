/*
=====================================================
; Title: Assignment 4.3 Handling Form Events with Observables
; Author: Professor Krasso
; Date 27 August 2021
; Modified By: Jourdan Neal
; Description: Using observables to handle form events. Demonstrating how observables "listen".
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';

//Replace import class, import ComposerService
import { ComposerService } from '../composer.service';

//Import statements for FormControl and debounceTime.
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {
  //composers variable with value of array of IComposers.
  composers: Array<IComposer>;

  //Add another field
  textSearchControl= new FormControl('');

  //Add composerService components to the constructor
  constructor(private composerService: ComposerService) {

    //this.composers = new Composer().getComposers(); //Creates new composer

    //Call composerService getComposer, this uses the service to create new instance.
    this.composers = this.composerService.getComposers();

    //Emit value change event on textSearchControl, after 500ms call filterComposers.
    this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }

  ngOnInit(): void {
  }

  //Create new filterComposers function
  filterComposers(name: string){
    alert(name);
  }

}
