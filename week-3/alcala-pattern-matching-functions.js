/*
============================================
; Title: alcala-pattern-matching-functions.js
; Author: Professor Krasso 
; Date: 18 June 2019
; Modified By: Troy Alcala
; Description: Creates an if else statement
; to check for matching variables
;===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 3.2")); //telling variable header to use the display module to log given information to the console

//variables
test1 = "Dog";
test2 = "Dog";
test3 = "Desktop";
test4 = "Laptop";
test5 = "Windows";
test6 = "MacOS";

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
    console.log(param1 + " and " + param2 + " do not match!")
}

//function that will state if two given parameters are not equal
function logMatch(param1, param2) {
    console.log(param1 + " and " + param2 + " do match!")
}

//if...else testing given variables to check for match or mismatch
if (match(test1, test2)) {
    logMatch(test1, test2);
} else {
    logMismatch(test1, test2);
}

if (match(test3, test4)) {
    logMatch(test3, test4);
} else {
    logMismatch(test3, test4);
}

if (match(test5, test6)) {
    logMatch(test5, test6);
} else {
    logMismatch(test5, test6);
}

//end