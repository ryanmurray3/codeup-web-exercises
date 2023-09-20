 "use strict";
//
//  //alert("Hello");
//
function showMultiplicationTable(num){
    for (let i=1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num *1} `)
    }
}
showMultiplicationTable(7);









showMultiplicationTable(4)

function showMultiplicationTable(x) {
    for (let j = 1;j < 11; j++) {
        console.log((x)+ "x" + (j) + "=" + (x * j));
    }
}

//create a random number between 20-200
//determine if random number is even or odd
//print in the console the random number and a note to say if the number is even or odd.

for (let i = 1; i <11; i++) {
function randomNumber(min, max){
    return (Math.floor(Math.random() * (max - min + 1) +(min)));
}
const number = randomNumber(20, 200);
    const checkEvenOdd = (number) => {
        const result = (number % 2 === 0) ? "even" : "odd";
        console.log(`${number} The number is ${result}.`);
    };
    console.log(checkEvenOdd(number));
}

//create a loop that iterates 9 times and prints sideways the number of times of the value of the number

for (let i = 1; i < 10; i++){
    console.log(`${i}`.repeat(i));
}

//create a for loop that descends from 100 to 5 by 5's

for (let i = 100; i > 0; i-=5) {
    console.log(i);
}






