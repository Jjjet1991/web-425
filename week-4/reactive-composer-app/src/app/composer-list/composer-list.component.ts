/*
=====================================================
; Title: Assignment 4.4 Async PipeLine
; Author: Professor Krasso
; Date 28 August 2021
; Modified By: Jourdan Neal
; Description: Using observables and build reactive application.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';

//Replace import class, import ComposerService
import { ComposerService } from '../composer.service';

//Import statements for FormControl and debounceTime.
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

//Import statement for Observable
import { Observable } from 'rxjs';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {

  //composers variable with value of array of IComposers.

  //Update composers variable type to Observable
  composers: Observable<IComposer[]>;

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
    //call to composerService.filterComposers(name) function and assign results to composers variable
    this.composers = this.composerService.filterComposers(name);
  }

}
