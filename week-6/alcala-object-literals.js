/*
============================================
; Title: alcala-object-literals.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Demonstrates how to create a 
; object literals
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 6.3")); //telling variable header to use the display module to log given information to the console


var ticket = {

    fullName: "Troy Alcala",

    id: "01056",

    requester: "Service Desk"

};


console.log("Ticket ID: " + ticket.id + "\n" + "Name: " + ticket.fullName + "\n" + "Requester: " + ticket.requester);
