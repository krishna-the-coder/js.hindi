// Dates

let myDate = new Date()
// console.log(myDate);     // not good for read return
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());     // only date
// console.log(myDate.toLocaleString());         // date and time  
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);     // date type - object


// ---->>>> Declared New or Specific Date <<<<------

// let myCreatedDate = new Date(2024, 0, 3)        // date(year, month(0-jan,11-dec), day)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 7, 3, 22, 58, 30)    //date(y, m, d, hour, minute, second)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-08-03")   //is method(yy-mm-dd) se month-1 se start hota hai
let myCreatedDate = new Date("03-08-2024")   // this method(mm-dd-yy) follow in india
// console.log(myCreatedDate.toLocaleString());


// ---->>>> Time Stamp <<<<------ Use in Quiz, Polls
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


// ---->>>> Other Method of Date <<<<------ 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
