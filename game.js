const game = document.querySelector(".game");
const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const box_container = document.querySelector(".game");
const start = document.querySelector(".start");
const player0 = document.querySelector(".player1");
const player1 = document.querySelector(".player2");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// getting the player names from the script.js of index.html for game.html
const queryParams = new URLSearchParams(window.location.search);
const pOne = queryParams.get('pOne');
const pTwo = queryParams.get('pTwo');
///////////////////////////////////////////////////////////////////////////

player0.classList.add("active__player");

player0.textContent = pOne;
player1.textContent = pTwo;

const disableClick = (bool) => {
    for (box of boxes) {
        box.disabled = bool;
    }
}

let number = 0;
const resetFunction = () => {
    if (turn = 0) {
        turn = 1;
    }
    else if (turn = 1) {
        turn = 0;
    }
    
    for (let i=0; i<9; i++) {
        if (boxes[i].textContent != "") {
            boxes[i].textContent = "";
            boxes[i].disabled = false;
        }
        else{
            boxes[i].disabled = false;
        }
    }
    
    disableClick(false);
    const winnerMessage = document.querySelector(".winner");
    if (winnerMessage) winnerMessage.remove();
    // if (player1.classList.contains("active__player")) {
    //     player1.classList.remove("active__player");
    // }
    // else if (player0.classList.contains("active__player")) {
    //     player0.classList.remove("active__player");
    // }
    count=0;

}

let pos1Val, pos2Val, pos3Val;
const checkWinner = () => {
    for (let pattern of winPatterns) {
        pos1Val = boxes[pattern[0]].textContent;
        pos2Val = boxes[pattern[1]].textContent;
        pos3Val = boxes[pattern[2]].textContent;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableClick(true);
                setTimeout(() => {
                    
                }, 5);

                return;
            }
        }
    }
}

let turn = 0;
let count = 0;
box_container.addEventListener("click", function(e) {
    const element = e.target.closest(".box");

    if (!element) return;

    if (turn == 0) {
        element.textContent = "X";
        turn = 1;
        count++;
        player1.classList.add("active__player");
        if (player0.classList.contains("active__player")) {
            player0.classList.remove("active__player");
        }
    }
    else if (turn == 1) {
        element.textContent = "O";
        turn = 0;
        count++;
        player0.classList.add("active__player");
        if (player1.classList.contains("active__player")) {
            player1.classList.remove("active__player");
        }
    }

    
    element.disabled = true;
    checkWinner();
    if(count===9) {
        resetFunction();
    }
});


reset.addEventListener("click", function() {
    player0.classList.add("active__player");
    resetFunction();
});