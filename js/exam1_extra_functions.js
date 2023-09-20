"use strict"
//
// alert("Hello!");
//
// // write a function called subtract that takes 2 numbers and returns the first # minus the second #

let a = 10
let b = 5
// function subtract(a, b) {
//     returns (a - b);
//     if(typeof a !== "number") {
//         return false;
//     }
//     return a - b;
// }
function subtract(a, b){
    if(typeof a !== "number"){
        return false;
    }
    return a - b
}

console.log(subtract(a, b));




// // write a function called cube that takes a number and returns the cube of that number
function cube(a) {
    return (a ** 3);
}
console.log(cube(7));



// // write a function called isGreaterThan that takes 2 numbers and returns true if the first number is greater than the second number
function isGreaterThan(a, b) {
    // true if (a > b)
    if(a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(isGreaterThan(7, 5));