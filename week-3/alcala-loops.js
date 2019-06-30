/*
============================================
; Title: alcala-control-statements.js
; Author: Professor Krasso 
; Date: 18 June 2019
; Modified By: Troy Alcala
; Description: Returns a random integer value
;===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 3.4")); //telling variable header to use the display module to log given information to the console

//variables
var1 = 7

//function that generates a random number
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

//function that checks if two given parameters are equal
function match(param1, param2) {
    if (param1 === param2) {
        return true;
    } else {
        return false;
    }
}

//function that will state if two given parameters are equal
function logMismatch(param1, param2) {
    console.log(param1 + " does not match " + param2 + "!")
}

//function that will state if two given parameters are not equal
function logMatch(param1, param2) {
    console.log(param1 + " does match " + param2 + "!")
}

for (let x = randomNumber(); x < 10; x++){
    if (match(var1, x)) {
        logMatch(var1, x);
    } else {
        logMismatch(var1, x);
    }
}