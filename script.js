const introduction = document.querySelector(".introduction");
const player1 = document.querySelector(".first");
const player2 = document.querySelector(".second");
const start = document.querySelector(".start");

let pOne, pTwo;
start.addEventListener("click", function() {
    if (player1.value === "" || player2.value === "") return;
    pOne = player1.value;
    pTwo = player2.value;
    console.log("Navigating to game.html with query parameters");
    window.location.href = `./game.html?pOne=${encodeURIComponent(pOne)}&pTwo=${encodeURIComponent(pTwo)}`;  // transferring the pOne and pTwo values to game.js
});