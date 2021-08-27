/*
=====================================================
; Title: Assignment 4.2 Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date 27 August 2021
; Modified By: Jourdan Neal
; Description: Using built in Dependency Injectors to create instance of service.
=====================================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
