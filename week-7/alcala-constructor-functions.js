/*
============================================
; Title: alcala-constructor-functions.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Demonstrates how to work 
; with constructor functions
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 7.2")); //telling variable header to use the display module to log given information to the console

//creating function that will create an employee object with 4 properties
function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }
  
  // creating new objects for use with Employee function
  const employees = [
    new Employee('001', 'Troy', 'Alcala', 'Service Desk Manager'),
    new Employee('002', 'John', 'Doe', 'Service Desk Technician'),
    new Employee('003', 'Tony', 'Smith', 'Service Desk Technician'),
    new Employee('004', 'Billy', 'Bob', 'Service Desk Technician'),
  ];
  
  // loop through created objects and display them
  console.log('-- DISPLAYING A LIST OF EMPLOYEES --')
  let index = 1
  for (let x = 0; x < employees.length; x++) {
    console.log(index + '. ' + employees[x].firstName + " " + employees[x].lastName + " - " + employees[x].title)
    index++
  }
  