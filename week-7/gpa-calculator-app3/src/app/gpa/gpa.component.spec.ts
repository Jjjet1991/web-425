/*
=====================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Using Reactive Forms to create Sign-In guard for GPA Calculator.
=====================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
