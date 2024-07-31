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
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value   //negvalue(negative value)
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(5%2);

let str1 = "hello"
let str2 = " krishna"

let str3 = str1 + str2
// console.log(str3);      //string add

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + 2 + "2");   // 32 bcoz of ToPrimitive

// console.log( (3 + 4) * 5 % 3);       // confusing operation, not readable code

// console.log(+true);     // 1 bcoz of increment in boolean
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2      // confusing code not clean
// console.log(num1, num2, num3);

let gameCounter = 100
// gameCounter++;      //posfix operator
++gameCounter;      //prefix operator
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion