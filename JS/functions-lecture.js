 "use strict"

 function subtract(a,b) {
    //return a-b;
     if(typeof a !== "number"){
         return false;
     }
     return a - b;
 }

 //write a function called cube that takes a number and returns the cube of that of that number
 function cube(a){
    return a ** 3;
 }

 //write a function that called isGreaterThan that takes two  numbers and returns true if the first number is greater than the second number
 function isGreaterThan(a, b){
    //true if a > b
     return a > b;
 }


 






//
// //alert("Hello")
//
// //function declaration
// //start with a `function` keyword
// //follow with the name of the function
// //think of what information you need in order to make the program work: these are the parameters
// //you name the parameters and put them in a comma seperated list inside the parentheses
// //open up a pair of curly braces
// //inside the curly braces you put the code that will actually run
// //this is called the code block
// //finally you create a return statement
//
//
// //function declaration
// function addTwoNumbers(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }
//
//
//
// //function timeIwouldSave(currentSpeed, plannedSpeed, distanceToTravel) {
//    // const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     //const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//    // return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
//    // console.log(timeAtCurrentSpeed);
// //}
//
// let result = addTwoNumbers(2, 2);
// console.log(result);
//
// //Arrow Function
// //Doesnt use the    `function` keyword
// //Define a variable with a variable name
// //that variable name is how you call the function
// //then you have an `arrow` (angle bracket and equals sign)
// //then you have the return value
//
// //if I am just returning something
// //I don't need the `return` keyword
// //const addTwoNumbers = (num1, num2) => num1 + num2;
//
// //if I have multiple lines of logic inside my arrow function, I need curly braces
// //If I have curly braces, I have to have a `return` keyword to define the return value
// const timeIWouldSave = (currentSpeed, plannedSpeed, distanceTravel) => {
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }
//
// //function expression
// // <======* no longer used *=====>
//
// const add = function(num1, num2) {
//     return num1 + num2;
// }
//
// //let result = add(5, 5);
// //console.log(result);
//
// console.log(add(5, 5));
//
