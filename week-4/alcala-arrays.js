/*
============================================
; Title: alcala-arrays.js
; Author: Professor Krasso 
; Date: 25 June 2019
; Modified By: Troy Alcala
; Description: Creates an array and outputs
; its values
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 4.2")); //telling variable header to use the display module to log given information to the console

const array1 = ["Lychee", "Pineapple", "Coconut", "Banana", "Plum"]

function getFruit (arg) {
    let index = 1

    for (let x = 0; x < arg.length; x++) {
        console.log(index + ". " + arg[x])
        index++
    }
}

console.log("-- DISPLAYING STRING ARRAY --")
getFruit (array1);