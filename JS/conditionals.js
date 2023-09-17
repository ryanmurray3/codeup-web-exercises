"use strict"

//alert("Hello");


/* ########################################################################## */

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
// function analyzeColor(name){
//     if (name === 'blue') {
//         console.log(`Blue is the color of my mood.`);
//     } else if (name === 'green') {
//         console.log(`Green is the color of the grass.`);
//     } else if (name === 'yellow') {
//         console.log(`Yellow is the color of the sun, son!`);
//     } else {
//         console.log(`That color is does not compute. Grrr...crash!`);
//     }
// }
// console.log(analyzeColor('yellow'));

//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */






// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let name = randomColor;
// let analyzeColor;
// switch (name) {
//     case 'blue':
//         analyzeColor = console.log(`Blue is the color of my mood.`);
//         break;
//     case 'green':
//         analyzeColor = console.log(`Green is the color of the grass.`);
//         break;
//     case 'yellow':
//         analyzeColor = console.log(`Yellow is the color of the sun, son!`);
//         break;
//     default:
//         analyzeColor= console.log(`That color is does not compute. Grrr...crash!`);
// }





/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let x = prompt(`Enter a color from the list, 'blue', 'green', 'yellow', 'pink'`);

let name = String(x);

switch (name) {
    case 'blue':
        alert("Blue is the color of my mood.");
        break;
    case 'green':
        alert(`Green is the color of the grass.`);
        break;
    case 'yellow':
        alert(`Yellow is the color of the sun, son!`);
        break;
    default:
        alert(`That color is does not compute. Grrr...crash!`);
}






/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let totalBill = prompt(`Please enter your total bill to see your discount.`);


function calculateTotal(luckyNumber){
        if (luckyNumber === 0){
            alert(`Sorry! Your luck number was ${luckyNumber} and you didn't get a discount.  Your bill is still $${totalBill}. Sad face emoji.`);
        }else if (luckyNumber === 1) {
            alert(`Not bad! Your lucky number is ${luckyNumber}, and you received 10% off your total bill of $${totalBill}, your new bill is $${totalBill - (totalBill *.10)}.`);
        }else if (luckyNumber === 2) {
            alert(`Pretty OK! Your lucky nubmer is ${luckyNumber} and you received 25% off your total bill of $${totalBill}. Your new bill is $${totalBill - (totalBill * .25)}.`);
        }else if (luckyNumber === 3) {
            alert(`Nice Job! Your lucky number is ${luckyNumber} and you received 33% off your total bill of $${totalBill}.  Your new bill is $${totalBill - (totalBill * .33)}.`);
        }else if (luckyNumber === 4){
            alert(`Karma Luck! Your lucky number is ${luckyNumber} and you received 45% off your total bill of $${totalBill}. Your new bill is $${totalBill - (totalBill * .45)}.`);
        }else if(luckyNumber === 5) {
            alert(`Mojo Lucky! Your lucky number is ${luckyNumber} and you received 100% off your bill of $${totalBill} is now FREE!!`);
        }else {
            alert(`It just didn't work. Keep shopping!`);
        }
}
calculateTotal(3);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


let luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNumber){
    if (luckyNumber === 0){
        alert(`Sorry! Your luck number was ${luckyNumber} and you didn't get a discount.  Your bill is still $${totalBill}. Sad face emoji.`);
    }else if (luckyNumber === 1) {
        alert(`Not bad! Your lucky number is ${luckyNumber}, and you received 10% off your total bill of $${totalBill}, your new bill is $${(totalBill - (totalBill *.10)).toFixed(2)}.`);
    }else if (luckyNumber === 2) {
        alert(`Pretty OK! Your lucky nubmer is ${luckyNumber} and you received 25% off your total bill of $${totalBill}. Your new bill is $${(totalBill - (totalBill * .25)).toFixed(2)}.`);
    }else if (luckyNumber === 3) {
        alert(`Nice Job! Your lucky number is ${luckyNumber} and you received 33% off your total bill of $${totalBill}.  Your new bill is $${(totalBill - (totalBill * .33)).toFixed(2)}.`);
    }else if (luckyNumber === 4){
        alert(`Karma Luck! Your lucky number is ${luckyNumber} and you received 45% off your total bill of $${totalBill}. Your new bill is $${(totalBill - (totalBill * .45)).toFixed(2)}.`);
    }else if(luckyNumber === 5) {
        alert(`Mojo Lucky! Your lucky number is ${luckyNumber} and you received 100% off your bill of $${totalBill} x 0 is FREE!!`);
    }else {
        alert(`It just didn't work. Keep shopping!`);
    }
}
calculateTotal(luckyNumber);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


if(confirm("Would you like to enter a number?")){
    const num = Number(prompt("Enter a number:"));
    if (isNaN(num)){
        alert("That is not the correct data type.");
    }else {
        if (isEven(num)) {
            alert("That is an odd number");
        } else (!isEven(num))
        alert("That is an even number")

    }
        alert(`${num} plus 100 equals ${add100(num)}`);

        if (!isPositive(num)){
            alert("That number is negative.");
        }else{
            alert("That number is positive.");
        }

}

function isEven(number){
    return number % 2 !== 0;
}

function isPositive(number){
    return number >= 0;
}

function add100(number){
    return number + 100;
}