console.log('working')

let cell = document.querySelectorAll('.cell');
let player1ScoreSpan= document.querySelectorAll('.player1Score')
let player2ScoreSpan= document.querySelectorAll('.player2Score')
let restartBtn = document.querySelectorAll('.restart')

let winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}

let warning = true;

for(let i= 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {

        if(warning === true) {

addcellsPlayer1(i);
        } else {
            addcellsPlayer2(i);

        }
        winnerIs();
    })
}

function addcellsPlayer1(i) {
    cell[i].innerHTML = 'X';
    player1.push(i);

    warning= false;
}
function addcellsPlayer2(i) {
    cell[i].innerHTML = 'O';
    player2.push(i);
    warning = true;
}

function winnerIs() {
    winningCombinations.find((item) => {
        if (item.filter((i) => player1.includes(i)).length === 3) {
        alert('Player1: Wins Game');
        score.player1++;
         clearField();
        
        return item;

    } else if (item.filter((i) => player2.includes(i)).length === 3) {  
     alert('Player2: Wins Game'); 
    score.player2++;
        clearField();
         {

    } return
    }
     })
    
    }

    function clearField(){

    for (let i = 0; i < cell.length; i++){
        cell[i].innerHTML = "";
    }
}
 player1 = [];
 player2 = [];
 warning = true;

restartBtn.addEventListener('click', () => {

    clearField();
    
})


  

