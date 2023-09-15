"use strict"

//
function isEven(num){
    return num % 2 ===0;
}



//


let userNum;
do{
    userNum = parseInt(prompt(`Please enter an odd number between 1 and 49`));
    if(isEven(userNum)){
        alert(`${userNum} is even. Please enter an odd number`)
        continue;
    }
    if(userNum < 1 || userNum > 49){
        alert(`${userNum} is out of bounds. Please enter a number between 1 and 49`)
        continue;
    }
    if(!isFinite(userNum)){
        alert(`${userNum} is not a number. Please enter a valid number`)
        continue;
    }

    break;

}
while(true);

console.log(`Number to skip is ${userNum}`);

for(let i=1; i<50; i++) {
    if(isEven(i)){
        continue;
    }
    if(i===userNum){
        console.log(`A wild ${userNum} has appeared! Run!`)
        continue;
    }
}

// while loops

let num = 1;
while(num < 65536){
    console.log(num);
    num*=2;
}


//cones

let totalCones= getRandomInt(50, 100);
let wantToBuy;

do{

let wantToBuy = getRandomInt(1,5);

if(wantToBuy <= totalCones){
    console.log(`A customer want to buy ${wantToBuy} cones`)
    totalCones -= wantToBuy;
}else{
    console.log(`a customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
}
console.log(`you now have ${totalCones} cones remaining.`)

    if(totalCones === 0){
        console.log(`You sold all your cones! You can go home now!`)
    }

}while(totalCones > 0)


//need random function..
function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + (min)));
}