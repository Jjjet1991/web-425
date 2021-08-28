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
