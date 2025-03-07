const name = 'Amit'
const repoCount = 50

// console.log(name + repoCount + " count");    // outdated syntax

console.log(`my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('amit-v')        // string is object here
console.log(gameName);          
console.log(gameName[0]);       // a

console.log(gameName.__proto__);        // lists the prototypes , eg below

console.log(gameName.length);           // 5
console.log(gameName.toUpperCase());    // AMITV
console.log(gameName.charAt(2));        // i
console.log(gameName.indexOf('t'));     // 3

const newString = gameName.substring(0,3)
console.log(newString);                 // ami

const anotherString = gameName.slice(-6,4)
console.log(anotherString);             // amit

const newStringOne = "    amit    "
console.log(newStringOne);              // "    amit    "
console.log(newStringOne.trim());       // "amit"

const url = "https://amit.com/amit%20vatyani"
console.log(url.replace('%20', '-'));
console.log(url.includes('amit'));      // true

console.log(url.split('/'));            // [ 'https:', '', 'amit.com', 'amit%20vatyani' ]

