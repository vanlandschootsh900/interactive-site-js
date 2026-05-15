// Shay VanLandschoot
// 5/11/26
// Interactive Site


const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');

const players = ['X','O'];
let currentPlayer = players[0];


const endMessage = document.createElement('h2');
endMessage.textContent = `X's Turn!`;
endMessage.style.marginTop= '30px';
endMessage.style.textAlign= 'center';
board.after(endMessage);

const winCombinations=(
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
);

for(let i=0; i< squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !==''){
            return
        }

        squares[i].textContent = currentPlayer
        if(checkWin(currentPlayer)) {
            endMessage.textContent=`GAME OVER! ${currentPlayer} WINS!`
            return
        }

        if(checkTie()) {
            endMessage.textContent= `GAME IS TIED!`
            return
        }

        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if(currentPlayer == players[0]) {
            endMessage.textContent = `X's Turn`
        }
        else{
            endMessage = `O's Turn`
        }
    })
}
