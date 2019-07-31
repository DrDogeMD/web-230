/*
============================================
; Title: alcala-nested-object-literals.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Demonstrates how to create a 
; and display nested objects
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 6.4")); //telling variable header to use the display module to log given information to the console

//creating variable object with properties
var ticket = {

    id: "003359",

    name: "Email sync issues",

    dateCreated: "7/2/2019",

    priority: "Medium",

    personId: "21094553",

    person: {                   //creating a nested object within ticket with separate properties

        id: "21094553",

        firstName: "Troy",

        lastName: "Alcala",

        jobTitle: "Service Desk Technician"
    }

};

//output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")");