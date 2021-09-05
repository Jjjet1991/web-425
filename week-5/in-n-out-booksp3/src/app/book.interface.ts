/*
=====================================================
; Title: Assignment 5.4- Dialogs
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Creating dialog box to display book details and button to confirm/close.
=====================================================
*/

//Creating IBook interface with fields for isbn, title, description, numOfPages, authors.
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
