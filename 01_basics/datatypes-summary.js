// Primitive Datatype - they are like call by value

// 7 types : Sting, Number, Boolean(true/false), Null(Empty), Undefined(value not define), Symbol, BigInt(big value)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false    // boolean type
const outsideTemp = null    // null is empty not 0 (null ka typeof = object)
let userEmail;              // undefined Ex- (letuserEmail = undefined)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);       // id and anotherId both value are not same

const bigNumber = 354252222222n


// Non-Primitive (Reference datatype)

// Array[], Objects{}, Functions

const heroes = ["shaktiman", "naagraj", "doga"];            // Array
let myObj = {                                               // Objects
    name: "krishna",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3
// section - 11.4.3 (The typeof Operator)

// typeof
/*  1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

    2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// +++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive) , Heap Memory (Non-Primitive)

// Stack - variable ka copy lekar usme change karta hai, Original value not change

let myYoutubename = "krishnakumaryt"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

// Heap - original value ka reference lekar usme change karta haim, Original value change

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "krishna@google.com"

console.log(userOne.upi);
console.log(userOne.email);
console.log(userTwo.email);