"use strict" ; //treat all js code as newer version

// alert (3+3)  //error    we are using node js, not a browser (inside console we get the popup 6 )


/* console.log(3 + 3)
 console.log("shashi") */

const name = "shashi" //string data type
let age = 25 //number data type
let isMarried = false //boolean data type
let hobbies = ["reading", "swimming", "coding"] //array data type
let address = {street: "Bhagwanpur", city: "siwan"} //object data type
let state = null //null data type
let y = undefined //undefined data type
console.table([ name,age, isMarried, hobbies, address, state, y]) //console.table() is used to display
console.log(typeof null); // null object hai


/* data types -
 1. number =>2 to power 53

 2. string => "shashi"
 3. boolean => true/false
 4. null => nothing -standalone value
 5. undefined => not assigned 
 6. Bigint
 7. symbol -> unique */

 console.log(typeof age)