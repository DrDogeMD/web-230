/*
============================================
; Title: alcala-predicates.js
; Author: Professor Krasso 
; Date: 25 June 2019
; Modified By: Troy Alcala
; Description: Declares and uses a predicate
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 4.4")); //telling variable header to use the display module to log given information to the console


const array = ["Hawaii", "Nebraska", "Colorado", "Arizona", "Virginia"];

function get_value(arr, filterValue) {
    return arr === filterValue
}

//output of unsorted array
console.log("\n-- DISPLAYING UNSORTED ARRAY --");
for (let x = 0; x < array.length; x++) {
    console.log(array[x]);
}

//output of sorted array
console.log("\n-- DISPLAYING SORTED ARRAY --");
array.sort().forEach(state => console.log(state));

//output of filtered array
console.log("\n--Selected value-- ");
console.log(
    array.filter // filter constant array
  (
    function (arr) {
      return get_value(arr, "Hawaii") //use get_value function to return element
    }
  )
  [0] // return the first element in the return array
);