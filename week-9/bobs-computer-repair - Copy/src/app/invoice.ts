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

import { Service } from "./service-interface";

//Create Invoice class with variables for services, parts and labor.
export class Invoice {
  services: Service[];
  parts: number;
  labor: number;
  constructor(){
    //Assign services to empty array, zero both parts and labor
    this.services = [];
    this.parts = 0;
    this.labor = 0;
  }
  //Create a function to add a service to the services array.
  addService(service: Service): void {
    this.services.push(service);
  }
  //Create a function to get the total of all the services in the service array
  getServiceTotal(): number {
    let total: number = 0;
    for (let service of this.services) {
      total += service.amount; // Create a running total of the menuItem.amount.
    }
   //Returns the total of all the selected services
    return total;
  }
  //Create a function to get the the total of the parts value entered by user.
  getPartsTotal(): number {
    //Return the total cost of parts
    return this.parts
  }
//Create a function to get the total of the labor costs.
  getLaborTotal(): number {
    //Return labor cost
    return this.labor
  }

  //Get Invoice Total
  getInvoiceTotal(): number {
    //Service total
    const serviceTotal: number = this.getServiceTotal();
    //Parts total
    const parts: number = this.getPartsTotal();
    //Labor total
    const labor: number = this.getLaborTotal();
    //Add all of the totals together to get the value of the invoice total
    const total: number = Number(serviceTotal) + Number(parts) + Number(labor);
   //Return InvoiceTotal
    return total ;
  }
}
