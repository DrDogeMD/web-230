/*
============================================
; Title: alcala-es5-built-in-functions.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Creates an array and iterates
; over it with the forEach funciton
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 5.2")); //telling variable header to use the display module to log given information to the console

//create array
var foods = ["Sushi", "Curry", "Poke", "Pizza", "Gyro"]

//call array with forEach function
foods.forEach(function(food) { //pass anonymouse funtion and value
    console.log(food); //output value from food
});