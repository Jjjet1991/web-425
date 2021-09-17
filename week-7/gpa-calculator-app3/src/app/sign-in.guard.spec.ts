/*
=====================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date 17 September 2021
; Modified By: Jourdan Neal
; Description: Using Reactive Forms to create Sign-In guard for GPA Calculator.
=====================================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
