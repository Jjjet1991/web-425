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

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invoice } from "./../invoice"

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {
  //invoice variable set equal to Invoice component.
  invoice: Invoice;

//Inject the Mat_Dialog_Data type:any to pass in invoice data
  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.invoice = data.invoice;

    console.log(this.invoice)

   }

  ngOnInit(): void {
  }

}
