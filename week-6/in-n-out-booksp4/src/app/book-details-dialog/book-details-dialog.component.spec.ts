/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
=====================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
