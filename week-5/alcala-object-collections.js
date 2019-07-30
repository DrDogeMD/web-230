/*
============================================
; Title: alcala-object-collections.js
; Author: Professor Krasso 
; Date: 29 July 2019
; Modified By: Troy Alcala
; Description: Creates an array like object
; collections and iterates over it.
===========================================
*/

//creating header in console
const header = require('../alcala-header.js'); //creating a constant variable that requires a certain file / module

console.log(header.display("Troy", "Alcala", "Assignment 5.2")); //telling variable header to use the display module to log given information to the console

//create array objects
var composers = [
    {
        firstName: "Ludwig",
        lastName: "Beethoven",
        genre: "Classical",
        rating: "10",
    },

    {
        firstName: "Johann",
        lastName: "Bach",
        genre: "Classical",
        rating: "7",
    },

    {
        firstName: "Wolfgang",
        lastName: "Mozart",
        genre: "Classical",
        rating: "8",
    },

    {
        firstName: "Johannes",
        lastName: "Brahms",
        genre: "Classical",
        rating: "7",
    },

    {
        firstName: "Richard",
        lastName: "Wagner",
        genre: "Classical",
        rating: "9",
    }

];

//call array with forEach function
composers.forEach(function(composer) { //pass anonymouse funtion and value
    console.log(composer.firstName + " " + composer.lastName + "\n" + composer.genre + "\n" + composer.rating +"\n"); //output values from composer
});