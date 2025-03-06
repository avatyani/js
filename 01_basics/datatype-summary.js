// two types of datatypes: primitive and non primitive

// Primitive (call by value: changes are made to the copy of data)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// JS is dynamically typed language, i.e. datatypes are assigned at runtime
const score = 100
const isLoggedIn = true

const id = Symbol('123')
const newId = Symbol('123')

console.log(id)
console.log(newId)
console.log(id == newId);

console.log(typeof id)      // symbol

const bigNumber = 1231231231231231n     // BigInt 


// Non-primitive (call by reference)
// 3 types: arrays, objects, functions

const heroes = ["ironman", "captain america", "spiderman"]  // array

const myObj = {
    name: "Amit",
    age: 23
}                                                           // object

const myFunction = function(){
    console.log("Hello world")
}                                                           // function


console.log(typeof bigNumber);      // BigInt
console.log(typeof heroes);         // object
console.log(typeof myObj);          // object
console.log(typeof myFunction);     // object function



// link to read
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof