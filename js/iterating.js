"use strict"
//alert("Hello");
// // //lecture
//
//  let fruits=['apple', 'orange', 'pear', 'banana', 'strawberry'];
// console.log(fruits);
//
// let nums=[1,2,3];
// console.log(nums);
//
// let godKnowsWhat=['stuff', 1, 'more stuff'];
// console.log(godKnowsWhat);
//
// console.log(fruits.length);
//
// console.log(fruits[2]);
//
// //show me the element
// let lastIndex = fruits.length -1;
// console.log(fruits[lastIndex]);
//
// //print all fruits
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     if(fruits[i] === "orange"){
//         // continue;                //continue will iterate the loop until all the fruits except the orange are thrown                             away.
//         break;
//     }
//     console.log("throws away " + fruits[i]);
// }
//
// console.log(prettyArrayString(fruits));
//
// function prettyArrayString(arr) {
//     let arrString = "";
//
//     for (let i = 0; i <arr.length; i++) {
//         if(i !== 0){
//             arrString += ',';
//          }
//         arrString += arr[i];
//     }
//     return arrString;
// }
//
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });
//
// fruits.forEach(function(fruit){
//     console.log("found a(n) " + fruit);
//     if(fruit === "orange"){
//         console.log("Found it!!!");
//     }
// });
//
// //for Spread Syntax
// console.log(...fruits);
// console.log(fruits);
//
//
// let bobsFruits= ["peach", "plum", "durian"];
// let ourFruits = [...fruits,...bobsFruits, bobsFruits[2]];
// console.log(ourFruits);
//
// function subtract(a, b) {
//     return a -b;
// };
// console.log(subtract(10, 5));
// let numArray = [5, 3];
// console.log(subtract(...numArray));
//
//
// function sum(...nums){
//     let sumOfNums = 0;
//     for (const num of nums) {
//         sumOfNums += num;
//     }
//     return sumOfNums;
// }
// console.log(sum(1,2,3,4,5,6));
// //let nums = [1,2,3,4,5,6,7]
// console.log(sum(...nums));


//EXERCISES -

        "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */
const names = ["Peter", "Paul", "Timothy", "Jackson"];

        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */
console.log(names.length);

        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}


        /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */

for (let i = 0; i <names.length; i++){
    console.log(names[i]);
}

        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */

names.forEach(name => console.log(`${name}`));

        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it


         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5


        */

// let firstName = (names) => {console.log(`${name}`)};
const newArray = ['john', 'kyle','tom'];
let x = newArray  //enter new array for 'x'
let firstName = () => (console.log(x[0]));
   firstName(x);

// - second: returns the second item in the array

let secondName = () => (console.log(x[1]));
   secondName(x)

// - last: returns the last item in the array

let lastName = () => (console.log(x[x.length -1]));
lastName(x)
