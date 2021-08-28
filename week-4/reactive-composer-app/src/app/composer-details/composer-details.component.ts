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
//Import IComposer, Composer, ActivatedRoute.
import { IComposer } from '../composer.interface';
//Replace class import with service import.
import { ComposerService } from '../composer.service'
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
  //Add ComposerService to constructor
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    //
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //If statement to check the composerId is valid
    if (this.composerId){
      //If valid call get Composer passing composerId.
      //Replace call to composer class to composerService
      this.composer= this.composerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
