/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
