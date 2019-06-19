/*
============================================
; Title: alcala-functions.js
; Author: Professor Krasso 
; Date: 11 June 2019
; Modified By: Troy Alcala
; Description: Displays a message in the 
; console created from multiple functions 
;===========================================
*/

//creating header in console
const header = require('./alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 2.3")); //telling variable header to use the display module to log given information to the console

//function for returning name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;    
}

//function for returning given date
function dateWriter(year, month, day) {
    return month +" " + day + ", " + year; 
}

//function for returning a fixed number for temperature
function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition); //using the toFixed method to make number go to the given number of decimal points
}

//function for converting a given string to an integer
function convertToInt(string) {
    var string = parseInt(string)
    return string;
}

//function for converting a given string to a floating number
function convertToFloat(string) {
    var string = parseFloat(string)
    return string.toFixed(2);
}

// concatenated output with passed arguments
console.log("Hello my name is " + fullName("Troy", "Alcala") + "!\n" + "\nToday's date is "
 + dateWriter(2019, "June", 11) + " and the current temperature is " + formatNumber(78, 1) + " degrees.\n" 
 + "\nI am " + convertToInt("25") + " years old and my savings account goal is $" + convertToFloat("15000") + ".")