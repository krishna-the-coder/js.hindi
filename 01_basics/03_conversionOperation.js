// let score = 33 // Number
// let score = "33abc"  // string (NaN - not a number)
// let score = null    // null value 0 in result
// let score = undefined   //Nan in result
let score = true   //boolean result true-1, false-0

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan(not a number) but type is number
// true => 1; false => 0

let isLoggedIn = 1   //1-true, 0-false
// let isLoggedIn = ""  //false
// let isLoggedIn = "Krishna"  //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false (Emptry string value false)
// "krishna" => true (string is full when value in true)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);