/*
=====================================================
; Title: Assignment 4.2 Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date 27 August 2021
; Modified By: Jourdan Neal
; Description: Using built in Dependency Injectors to create instance of service.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';

//Replace import class, import ComposerService
import { ComposerService } from '../composer.service';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {
  //composers variable with value of array of IComposers.
  composers: Array<IComposer>;

  //Add composerService components to the constructor
  constructor(private composerService: ComposerService) {

    //this.composers = new Composer().getComposers(); //Creates new composer

    //Call composerService getComposer, this uses the service to create new instance.
    this.composers = this.composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
