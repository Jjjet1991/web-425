/*
=====================================================
; Title: Assignment Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date  August 2021
; Modified By: Jourdan Neal
; Description: Re-naming application and components of composer-app, passing data routes.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
//Import IComposer, Composer, ActivatedRoute.
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  //Add composerId type number.
  composerId: number;
  //Add composer of IComposer.
  composer : IComposer;

  //Pass ActivatedRoute into constructor.
  constructor(private route: ActivatedRoute) {
    //
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //If statement to check the composerId is valid
    if (this.composerId){
      //If valid call get Composer passing composerId.
      this.composer= new Composer().getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
