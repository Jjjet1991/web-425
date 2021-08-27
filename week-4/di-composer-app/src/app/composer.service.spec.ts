/*
=====================================================
; Title: Assignment 4.2 Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date 27 August 2021
; Modified By: Jourdan Neal
; Description: Using built in Dependency Injectors to create instance of service.
=====================================================
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
