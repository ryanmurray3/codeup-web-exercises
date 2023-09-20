"use strict"
//
//alert("Hello!");
// // //Lecture notes
// //
// // let cars = ["altima", "bronco", "pinto", "mustang"];
// // console.log(cars);
// // //add to cars array
// // cars.push("gremlin");
// // console.log(cars);
// //
// // cars.unshift("civic");
// // console.log(cars);
// //
// // //remove from array
// // let removedCar = cars.shift();
// // console.log("removed" + removedCar);
// // console.log(cars);
// //
// // let index = cars.indexOf("bronco");
// // console.log(index);
// //
// // cars.push("bronco");
// // console.log(cars);
// //
// // index = cars.indexOf("bronco", 2);
// // console.log(index);
// //
// //
// // index = cars.lastIndexOf("bronco", 3);
// // console.log(index);
// //
// // let doesExist = cars.includes('bronco');
// // console.log(`bronco exists? ${doesExist}`);
// //
// // //making subsets with slice
// // let someCars = cars.slice(2, 4);
// // console.log(someCars);
// //
// // cars.reverse(cars);
// // console.log(cars);
// //
// // cars.sort();
// // console.log(cars);
// //
// // let myNums = [1,2,3,4,5,6,7,8,9,10];
// // console.log()
// //
// // console.log("unsorted numbers");
// // console.log(myNums);
// //
// //
// // let fruitString = "apple, orange, banana";
// // let fruits =fruitString.split(", ");
// // console.log(fruits);
// //
// // fruitString = fruits.join("|");
// // console.log(fruitString);
// //
//


var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

//
//         /**
//          * TODO:
//          * Convert planetsString to an array, and save it in a variable named
//          * planetsArray.
//          * console.log planetsArray to check your work
let planetsArray = planetsString.split("|");
console.log(planetsArray);

//         // console.log(planetsArray);
//
//         /**
//          * TODO:
//          * Create a string with <br> tags between each planet. console.log() your
//          * results. Why might this be useful?
let planetsString2 = planetsArray.join("<br>");
    console.log(planetsString2);



//          * BONUS:
//          * Create another string that would display your planets in an unordered
//          * list. You will need an opening AND closing <ul> tags around the entire
//          * string, and <li> tags around each planet.


let planetsAnotherString = `<ul><li>${planetsArray.join("</li><li>")}</li></ul>`;
console.log(planetsAnotherString);

