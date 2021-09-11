/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
=====================================================
*/

//** This is where you handle the business logic of the form submission **

import { Component, OnInit } from '@angular/core';

//Import statement for the IWishlistItem interface
import { IWishListItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  //New variable named items of type Array<IWishlistItem> and assign it to an empty array
  items: Array<IWishListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //New function updateItemsHandler
  updateItemsHandler(item: IWishListItem) {
    //Push item to items array (line 17)
    this.items.push(item);
  }

}
