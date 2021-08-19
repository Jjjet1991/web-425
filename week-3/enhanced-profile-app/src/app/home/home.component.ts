/*<!--
=====================================================
; Title: Assignment 3.3 Passing Data Routes Part 2
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Using Routes to pass data and create router guards.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
//Import statement for ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Add a variable named isLoggedIn of type boolean
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {

    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
