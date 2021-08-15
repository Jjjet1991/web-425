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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
