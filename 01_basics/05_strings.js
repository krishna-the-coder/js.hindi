// `` - backtick symbol name
const name = "krishna"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// String interpolation technique, and backtick(`) symbol use -->

// String use by new method -->
const gameName = new String('kkracer')  //here string (object-check typeof) and new(keyword) 

// console.log(typeof gameName)
// 5-key, e-value, Google-> inspect->cosole-> const gameName = new String('kkracer') -> gameName --> value,key, prototype and more string method

// console.log(gameName[5]);           
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));        // find value(character) by key(number)
console.log(gameName.indexOf('c'));     // find key(number) by value(character)


