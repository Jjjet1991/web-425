/*
=====================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Using Angular Material to create data table.
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

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

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  //Function to showBookDetails, passing through the value of isbn string.
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    //Check to make sure it is working by logging this.book to the console.
    console.log(this.book);
  }
}
