/*
=====================================================
; Title: Assignment 9.3 Bob's Computer Repair Deliverable
; Author: Professor Krasso
; Date 3 October 2021
; Modified By: Jourdan Neal
; Description: Creating application to total user selected services from checkbox and add in values
; for user inputted cost for parts and labor. Return a summary of all the charges to the user as
; a dialogue box.
=====================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
