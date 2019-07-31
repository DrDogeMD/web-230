/*
============================================
; Title: alcala-exception-handling.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Demonstrates how to create a 
; try/catch/finally block
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 6.2")); //telling variable header to use the display module to log given information to the console


try {
    // variables
    var x = 2
  
    // if statement
    if (x < 3) throw 'ValueTooLow'
  
    // output
    console.log(x)
  } 
  catch (err) {
    console.log('Catch clause: ' + err)  //catches error and outputs thrown message
  } 
  finally {
    console.log('Finally clause reached...')
  }