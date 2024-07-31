// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//NOTE:- Below all this type code always create confusion, so in most cases avoid this type of comparison

// console.log("2" > 1); //Js automatic convert into number so don't try this type syntax, use same datatype
// console.log("02" > 1);       // datatype change create confusion

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//The reason is that an equality check == and comparison > < >= <= work differently
// Comparison convert null to a number, treating it as 0.
// That's why (13) null >= 0 is true and (11) null > 0 is false.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);     // == is true, === is false