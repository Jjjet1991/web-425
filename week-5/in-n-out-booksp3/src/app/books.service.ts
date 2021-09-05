/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/

import { Injectable } from '@angular/core';

//import Observable, of, and map and IBook.
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //Create a books class with array of IBook
  books: Array<IBook>;
  constructor() {
    this.books = [
      //1st book
      {
        isbn: '0345339681',
        title: 'The Hobbit',
        description: 'Bilbo Baggins was a hobbit who wanted to be left alone in quiet comfort. But the wizard Gandalf came along with a band of homeless dwarves. Soon Bilbo was drawn into their quest, facing evil orcs, savage wolves, giant spiders, and worse unknown dangers. Finally, it was Bilbo–alone and unaided–who had to confront the great dragon Smaug, the terror of an entire countryside',
        numOfPages: 322,
        authors: ['J.R.R. Tolkien']
      },
      //2nd book
      {
        isbn: '0261103571',
        title: 'The Fellowship of the Ring',
        description: "The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them",
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      //3rd book
      {
        isbn: '1514297272',
        title: 'The Two Towers',
        description: "The second volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS",
        numOfPages: 448,
        authors: ['J.R.R. Tolkien']
      },
      //4th book
      {
        isbn: '1514298139',
        title: 'The Return of the King',
        description: "The third volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS",
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      //5th book
      {
        isbn: '9780593099322',
        title: 'Dune',
        description: "A deluxe hardcover edition of Frank Herbert’s epic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.",
        numOfPages: 688,
        authors: ['Frank Herbert']
      }
    ]
  }
  //Create a function getBooks that returns observable IBook array
  getBooks(): Observable<IBook[]>{
    return of(this.books);
  }

  //Loop over this.books array, matches isbn number to return that book
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }

}
