/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date 22 August 2021
; Modified By: Jourdan Neal
; Description: Creating guarding routes on enhanced-secure-profile app.
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
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
