/*
=====================================================
; Title: Assignment 6.3 Layouts
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Re-usable layouts-auth-layout and base-layout, re-useable layouts w/ different routes(including chlildren).
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
