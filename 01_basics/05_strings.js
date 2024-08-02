// `` - backtick symbol name
const name = "krishna"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// String interpolation technique, and backtick(`) symbol use -->

// String use by new method -->
const gameName = new String('krishna-hc-com')  //here string (object-check typeof) and new(keyword) 

// console.log(typeof gameName)
// 5-key, e-value, Google-> inspect->cosole-> const gameName = new String('kkracer') -> gameName --> value,key, prototype and more string method

// console.log(gameName[5]);           
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));        // find value(character) by key(number)
console.log(gameName.indexOf('s'));     // find key(number) by value(character)

const newString = gameName.substring(0, 4)  // last value 4 ko include nah kiya 
console.log(newString);

const anotherString = gameName.slice(1, -1)     // slice mein -ve value use kar sakte hai
console.log(anotherString);


const newStringOne = "   krishna    "       // Trim unknwon space ko hta deta hai
console.log(newStringOne);
console.log(newStringOne.trim());     // Trim unknwon space ko hta deta hai


// url ke beec mein space reh jata hai to %20 automatic lag jata hai, to %20 ko replace karne ke liye string ke replace method ka use karte hai
const url = "https://krishna.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('krishna'))    // url mein krishna hai to 'true' nahi to 'false'

console.log(gameName.split('-'));       // line no.11 (dash(-) se split kar diya characters ko)