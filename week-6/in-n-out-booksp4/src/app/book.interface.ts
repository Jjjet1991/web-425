/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
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
