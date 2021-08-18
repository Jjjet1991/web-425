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
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {
  //composers variable with value of array of IComposers.
  composers: Array<IComposer>;

  constructor() {

    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
