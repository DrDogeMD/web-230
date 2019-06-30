/*
============================================
; Title: alcala-control-statements.js
; Author: Professor Krasso 
; Date: 18 June 2019
; Modified By: Troy Alcala
; Description: Displays a string method if
; the choice variable equals C 
;===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 3.3")); //telling variable header to use the display module to log given information to the console

// variable
let eventKeyCode = 13;

/* 
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/

//if...else statements converted to a switch statement
switch(eventKeyCode){
    case 13:
        console.log("The enter key was pressed")
        break;
    case 16:
        console.log("The shift key was pressed.")
        break;
    case 32:
        console.log("The spacebar key was pressed.")
        break;
    case 8:
        console.log("The backspace / delete key was pressed.")
        break;
    default:
        console.log("Unrecognized key.")
        break;
}

//end