/*
============================================
; Title: Assignment 1.5
; Author: Troy Alcala
; Date: 4 June 2019
; Description: This program demonstrates 
; primitive type variables and how to
; format their output.
;===========================================
*/ 

/*first employee information*/
var firstName1 = "Troy";
var lastName1 = " Alcala";
var address1 = " 25";             
var payRate1 = 20.32;
var hireDate1 = new Date();     /*using newDate constructor to create a date*/

/*second employee information*/
var firstName2 = "Jon";
var lastName2 = "Doe";
var address2 = "1000 Galvin Rd. Bellevue NE 68005";             
var payRate2 = 23.16;
var hireDate2 = new Date();     

/*third employee information*/
var firstName3 = "Joe";
var lastName3 = "Smith";
var address3 = "1000 Galvin Rd. Bellevue NE, 68005";             
var payRate3 = 21.78;
var hireDate3 = new Date();     

/*Outputting employee one information.*/
console.log("Employee One:\n" + firstName1 + " " + lastName1 + ", " + address1 + ", $" + payRate1.toFixed(1) + ", " + hireDate1.toLocaleDateString()) 

/*Outputting employee one information.*/
console.log("Employee Two:\n" + firstName2 + " " + lastName2 + ", " + address2 + ", $" + payRate2.toFixed(1) + ", " + hireDate2.toLocaleDateString())  

/*Outputting employee one information.*/
console.log("Employee Three:\n" + firstName3 + " " + lastName3 + ", " + address3 + ", $" + payRate3.toFixed(1) + ", " + hireDate3.toLocaleDateString())  