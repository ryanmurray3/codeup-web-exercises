"use strict";


console.log( "Hello from external JavaScript");
// 1
alert('Welcome to my Website')
// 2
let color = prompt("What is your favorite color?")

let favoriteColor = alert(`Great, ${color} is my favorite color too! `)

//Exercise 3
//number 1
let moviesDays = prompt("Enter the title of the movie");
let costToRent = prompt(" and how many days you rented it for. ");
let moviesDays1 = prompt("Enter the title of the movie");
let costToRent1 = prompt(" and how many days you rented it for. ");
let moviesDays2 = prompt("Enter the title of the movie");
let costToRent2 = prompt(" and how many days you rented it for. ");


let moviesCost = costToRent * 3
let moviesCost1 = costToRent1 * 3
let moviesCost2 = costToRent2 * 3


alert(`Your rental of ${moviesDays} is: $ ${moviesCost}`);
alert(`Your rental of ${moviesDays1} is: $ ${moviesCost1}`);
alert(`Your rental of ${moviesDays2} is: $ ${moviesCost2}`);

let totalCost = moviesCost + moviesCost1 + moviesCost2;

alert(`Your total cost to rent all three movies is $ ${totalCost}`);

let googleHours = prompt("How many hours did you work this week for Google?");
let amazonHours = prompt("How many hours did you work this week for Amazon?");
let facebookHours = prompt("How many hours did you work this week for Facebook?");

//number 2
let googlePay = googleHours * 400;
let amazonPay = amazonHours * 380;
let facebookPay = facebookHours * 350;

let weekPay = googlePay + amazonPay + facebookPay;

alert(`You made ${weekPay} dollars this week!`);


//number 3
let classSize = confirm("Is the class you want to enroll in full?");
let classTime = confirm("Does the time of the class conflict with the student's schedule?")

if (classSize === true && classTime === true) {
   alert("You are now enrolled!");
} else {
    alert("You cannot enroll at this time.");
}

//number 4
let personBoughtMoreThanTwo = confirm("Did the person buy more than 2 items?");
let offerHasNotExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the person a premium member?");

let productOfferCanBeApplied = (personBoughtMoreThanTwo || premiumMember) && !offerHasNotExpired;

alert(`It is ${productOfferCanBeApplied} product offer can be applied `)

console.log(productOfferCanBeApplied);

