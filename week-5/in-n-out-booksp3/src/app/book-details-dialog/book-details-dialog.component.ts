/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/

import { Component, OnInit } from '@angular/core';

//Add import statements for MatDialog, Inject and IBook
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  //add variable book value of IBook
  book: IBook;

  //Add MAT_DIALOG_DATA and MatDialogRef to the component constructor
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA)data){

      //Map data.book value to the book variable
      this.book = data.book;
     }

  ngOnInit(): void {
  }

}
