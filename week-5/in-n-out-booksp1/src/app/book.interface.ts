/*
=====================================================
; Title: Assignment 5.2 Layout and Navigation
; Author: Professor Krasso
; Date 5 September 2021
; Modified By: Jourdan Neal
; Description: Using Angular Material to implement navigation, color theming, and working with flex-layout.
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
