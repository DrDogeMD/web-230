/*
============================================
; Title: alcala-filtering.js
; Author: Professor Krasso 
; Date: 25 June 2019
; Modified By: Troy Alcala
; Description: Returns a filtered value
; from an array
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 4.3")); //telling variable header to use the display module to log given information to the console

//array of strings
const vehicles = ["Motorcycle", "Car", "Truck", "SUV", "Boat"]

//output of full array
console.log("\n-- DISPLAYING VEHICLES --");
for (let x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}

//output of selected value with new line
console.log("\n-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

//output of second selected value with new line
console.log("\n--SELECTED VALUE--");
getValue(vehicles, "SUV");

//function that gets values of an array
function getValue(arr, filterValue) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] === filterValue) {
        console.log(arr[x]);
      }
    }
  }

//end
