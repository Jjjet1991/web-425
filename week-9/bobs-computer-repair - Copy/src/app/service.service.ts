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

import { Injectable } from '@angular/core';
import { Service } from './service-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  //Create a function to return array of services, theses will make up the checkbox selection of services.
  getServices(): Service[] {
    const services: Service[] = [
      //Variable services will be the array of the different services, each Service contains title, amount, checked.
      {
        title: 'Password Reset',
        amount: 39.99,
        checked: false
      },
      {
        title: 'Spyware Removal',
        amount: 99.99,
        checked: false
      },
      {
        title: 'RAM Upgrade',
        amount: 129.99,
        checked: false
      },
      {
        title: 'Software Installation',
        amount: 49.99,
        checked: false
      },
      {
        title: 'Tune-Up',
        amount: 89.99,
        checked: false
      },
      {
        title: 'Keyboard Cleaning',
        amount: 45.00,
        checked: false
      },
      {
        title: 'Disk Clean-up',
        amount: 149.99,
        checked: false
      },
    ];
    //Return services array.
    return services;
  }


}
