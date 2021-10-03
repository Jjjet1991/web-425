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

import { Component, OnInit } from '@angular/core';
import { Service } from '../service-interface';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { Invoice } from '../invoice';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Define services variable giving it value of Service Array
  services: Service[];
  invoice : Invoice;

  constructor(private dialog: MatDialog, private serviceService: ServiceService) {
    //This.services will call the getServices function from ServiceService
    this.services = serviceService.getServices();
    this.invoice = new Invoice();
   }

  ngOnInit(): void {
  }

  //Create a function to clear the form
  clearInvoice(): void {
    for (let service of this.services) {
      service.checked = false;
    }
  }

  //Create function for submitting selected services
  submit(): void {
    console.log(this.services)

    for (let service of this.services) {
      if (service.checked) {
        this.invoice.addService(service);
      }
    }
/*Create a dialogRef box using InvoiceDialogComponent */
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        invoice: this.invoice
      },
      disableClose: true,
      width: '800px'
    })

  }

}
