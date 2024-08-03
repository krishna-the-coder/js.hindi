const score = 400
// console.log(score);

// create specific number datatype
const balance = new Number(100)
// console.log(balance);

// Number Properties
// console.log(balance.toString().length);    // convert in string, then length of string (or any method of string)
// console.log(balance.toFixed(2));    // Number ke baad decimal aa jata hai jitna number de

const anotherNumber = 123.8966
// console.log(anotherNumber.toPrecision(4));  
    /* decimal ke baad ke value ko bhi priority militi hai, toPrecision mein number value small ho ya big (point ke baad round off),(exponential method work karta h) */

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));     //big value ko arrange karta hai,US type default hai


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));      //abs(absolute value) --> only -ve value +ve mein hogi, not +ve to -ve
// console.log(Math.round(4.7));   // Round off value use (5 ke Lower/Upper value not change/changed)
// console.log(Math.ceil(4.2));    // decimal ke baad kuchh bhi ho Upper value choose karega
// console.log(Math.floor(4.8));    // decimal ke baad kuchh bhi ho Lowest value choose karega
// console.log(Math.sqrt(196));    // square roote nikalta hai
// console.log(Math.min(4, 3, 6, 8));  // array mein se minimum value
// console.log(Math.max(4, 3, 6, 8));  // array mein se maximum value

// Random Number ---> 
console.log(Math.random());     // Random value select karta hai, but only decimal ke baad(0.1, 0.2)
console.log((Math.random()*10) + 1);  // *10 karne par decimal se phle value aa jati hai(Value shift karta hai left mein), decimal ke baad immediately 0 na aaye isliye 1 ka use karte hai (value 1 to 9 ke beech rahegi)
console.log(Math.floor(Math.random()*10) + 1);      // lowest value use by floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))


// Explanation of random number  ----> 
// A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega...