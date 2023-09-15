// "use strict";
// //alert("Hello");
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
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
//
//
// // function analyzeColor(color) {
// //     if (color === "red") {
// //         return "Red is the color of love.";
// //     } else if (color === "blue") {
// //         return "Blue is the color of the ocean.";
// //     } else if (color === "Yellow") {
// //         return "Yellow is the color of corn.";
// //     } else if (color === "brown") {
// //         return "Brown is the color of the earth.";
// //     } else {
// //         return color + " this color is not recognized.";
// //     }
// //}
// // console.log(analyzeColor("green"));
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// // console.log(randomColor);
//
//
//
//
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//
// switch (randomColor) {
//     case "red" :
//         alert ("Red is the color of love.");
//         break;
//     case "blue" :
//         alert ("Blue is the color of the ocean.");
//         break;
//     case "Yellow" :
//         alert ("Yellow is the color of corn.");
//         break;
//     case "brown" :
//         alert ("Brown is the color of the earth.");
//         break;
//     default:
//         alert (randomColor + " this color is not recognized.");
//         break;
// }
//
//


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

  // let color = prompt("Enter the first color that comes to mind...");
// alert(analyzeColor(prompt"Enter the first color that comes to mind..."))
  //   console.log(analyzeColor(color));

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

function calculateTotal(number, total) {
    if (number === 0) {
        return "Sorry, no discount today.  Better luck next time.";
    } else if (number === 1) {
        return "$" + (total - (total * .1)) + " Lucky You! You got 10% off today!";
    }else if (number === 2) {
        return "$" + (total - (total * .25)) + " Lucky You! You got 25% off today!";
    }else if (number === 3) {
        return "$" + (total - (total * .35)) + " Lucky You! You got 35% off today!";
    }else if (number === 4) {
        return "$" + (total - (total * .5)) + " Lucky You! You got 50% off today!";
    }else if (number === 5) {
        return (total - total) + " Lucky You! You got 100% off today!";
    }
}



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
// var total = prompt(`Enter your total bill and get lucky!`);
//     alert(`Your lucky number is ${luckyNumber} and your new total is $${calculateTotal(luckyNumber, total)}`);
//



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
        alert("That is not the correct data type")
    }else {
        if (num % 2 === 0) {
            alert("That is an even number.");
        } else {
            alert("That is an odd number");
        }

        alert(`${num} plus 100 equals ${num + 100}`);

        if (num < 0) {
            alert("That number is negative");
        } else {
            alert("That number is positive")
        }
    }

}



// function isEven(number){
//     return number % 2 === 0;
// }
//
// function isPositive(number){
//     return number >= 0;
// }
// function plus100(number){
//     return number + 100;
// }


//Bonus

// ### IF / ELSE IF / ELSE
//
// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
//     It will accept 4 arguments and the parameter names are:
//
//     - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
// ---
//     1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
//     This `getToDestination` should not return any value, but rather console log based on the conditions met.

function getToDestination(age, isInsured, hasCar, canGetRideShare){
    if (age >= 16 && is isInsured && hasCar){
        console.log("This person can use their own car");
    }
    if ((age < 16 || !isInsured || !hasCar) && canGetRideShare){
        console.log("This person can use rideshare");
    } else {
        console.log("This person should call a friend for a ride.");
    }
}