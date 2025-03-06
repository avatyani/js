// console.log(2 == 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 != 1)
// console.log(2 > 1)


// these conversions are avoided
// automatically converts string to number
console.log("2" > 1);   //true
console.log("02" > 1);  //true

// gives unpredictable results
console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true
// comparision operator (>=) turns null to a number, but >, == do not convert it to a number

// === : strict check , checks number as well as datatype
console.log("2" === 2);



