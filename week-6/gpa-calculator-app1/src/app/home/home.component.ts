/*
=====================================================
; Title: Assignment 6.3 Layouts
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Re-usable layouts-auth-layout and base-layout, re-useable layouts w/ different routes(including chlildren).
=====================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
