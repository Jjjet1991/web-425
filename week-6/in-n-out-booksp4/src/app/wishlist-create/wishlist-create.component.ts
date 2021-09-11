/*
=====================================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date 12 September 2021
; Modified By: Jourdan Neal
; Description: Creating forms to capture user data and output user entries.
=====================================================
*/

//Import statement for IWishListItem
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  //Add an output statement named addItemEmitter
  @Output() addItemEmitter = new EventEmitter<IWishListItem>();


  //New variable item with value of IWishListItem
  item: IWishListItem;

  constructor() {
    //Create a new instance of the IWishlistItem object- casting object literal to object type: IWishListItem
    this.item = {} as IWishListItem;
   }

  ngOnInit(): void {
  }

  //AddItem function
  addItem() {
    //Emit the user input for title and author.
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    })

    //Reset to blank object literal
    this.item = {} as IWishListItem;
  }

}
