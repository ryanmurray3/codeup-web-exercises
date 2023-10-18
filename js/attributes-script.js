"use strict"



// change image after 2 seconds
    function changeImage() {
        let img = document.querySelector("#profile-pic");
        img.src = "img/houseinwinter.jpg";
    }

//Four seconds after the page loads, use innerHTML to change the name in "profile-name".

    function changeName() {
        let name = document.querySelector("#profile-name");
        name.innerHTML = "Mary Bekins";
    }

//Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

    function newClass() {
        let colorandtext = document.getElementById("profile-desc");
        colorandtext.classList.add("profile-d");
    }


//Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
    function toggleClass() {
        let bgColor = document.querySelector("#profile-card");
        bgColor.classList.toggle();
    }

function allTimers() {
    setTimeout(changeImage, 2000);
    setTimeout(changeName, 4000);
    setTimeout(newClass, 6000);
    setInterval(toggleClass, 2000);
}



let timeouts = [];


