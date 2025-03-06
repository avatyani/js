let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN , typeof(NaN) => number
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 0

let boleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(boleanIsLoggedIn)

// Boolean type conversion
// 1 => true; 0 => false
// "" => false ; "Amit" => true
// any number other than 0 (eg. 3,6,-1,etc..) => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber) 

// string conversion
// 33 => string
// true => string


// *********************** Operations *****************************

let val = 3
let negVal = -val
// console.log(negVal)

let str1 = "Amit"
let str2 = " Vatyani"
str3 = str1 + str2
console.log(str3)   // Amit Vatyani

console.log(1 + "2")    //12
console.log("1" + 2)    //12
console.log("1" + 2 + 2)    //122   if string first then entire row will be treated as string
console.log(1 + 2 + "2")    // 32   if numbers firast then they are solved and then merged


// // bad way of writing code
// console.log(3+4*3/5)   
// console.log(+true)  //1
// console.log(true+)  //error
// console.log(+"")    //0

// //poor style of writing
// let num1, num2, num3
// num1 = num2 = num3 = 2+2


// pre and post increment operators
let gameCounter = 100
++gameCounter
console.log(gameCounter)

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment