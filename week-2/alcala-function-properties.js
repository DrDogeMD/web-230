/*
============================================
; Title: alcala-function-properties.js
; Author: Professor Krasso 
; Date: 11 June 2019
; Modified By: Troy Alcala
; Description: Displays a message in the 
; console created from function properties
;===========================================
*/

//creating header in console
const header = require('./alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 2.3")); //telling variable header to use the display module to log given information to the console

//creating function properties for first and last name
myName.troy = "Troy";
myName.alcala = "Alcala";

//creating function
function myName() {
    return myName.troy + " " + myName.alcala;  //telling function to return two properties with a space in between
}

console.log("Hello " + myName() + "!"); //writing to console 