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

import { AuthLayoutComponent } from './auth-layout.component';

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
