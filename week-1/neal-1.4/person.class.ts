/*
=====================================================
; Title: Assignment 1.4 TypeScript
; Author: Professor Krasso
; Date 14 August 2021
; Modified By: Jourdan Neal
; Description: Creating new Person with Typescript.
=====================================================
*/

import { IPerson } from "./person.interface";

//Create new person class
class Person implements IPerson {
    firstName: string;
    lastName: string;
    //Constructor with firstName and lastName params.
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//Create new variable myName with a vale of a new Person.
let myName = new Person("Jourdan", "Neal");

console.log(`My name is ${myName.firstName} ${myName.lastName}`)
