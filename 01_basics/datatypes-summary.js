// primitive data types

// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8877320579n


// Refrence type (Non - primitive)

// Array, Objests, Functions

 /* Array*/ const heros = ["ironman", "spiderman", "america"]

/* objects*/ 
{
    name: "sushant"
    age: 24 
}
/*same only but different way to write*/
    let mySelf = {
        name: "sushant",
        age: 24,
    }

/* function */
const myFunction = function(){
    console.log("Hi World");
    
}

console.log(typeof myFunction);