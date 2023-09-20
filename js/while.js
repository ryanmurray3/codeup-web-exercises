"use strict"

// alert("from while script");

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