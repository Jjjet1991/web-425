/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

//Import statement for Dialog Module and BookDetailsDialogComponent
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  //give books the value of Observable of IBook array
  books: Observable<IBook[]>;
  //Define header array to use in HTML table.
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  //Define book with value of IBook element
  book: IBook;
  //Add MatDialog to components constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  //Function to showBookDetails, passing through the value of isbn string.
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    //Create dialogRef object
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      //Create new object literal called data-nested object literal called book
      data: {book:this.book},
      disableClose:true,
      width: '800px'
    })
    //Check to make sure it is working by logging this.book to the console.
    console.log(this.book);

    //Call the afterClosed() function and set the book variable to null
    dialogRef.afterClosed().subscribe(result=>{
      if(result === 'confirm'){
        this.book = null;
      }
    });

  }
}
