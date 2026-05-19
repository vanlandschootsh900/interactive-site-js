// // Shay VanLandschoot
// // 5/11/26
// // Interactive Site


// This will run the HTML so the jS can work sencse the link to the JS is in the head
window.addEventListener('DOMContentLoaded', ()=>{

    // used array becuse it returns it a node list which is an array-like so its easier to turn in to a array
    const box = Array.from(document.querySelectorAll('.box'));
    const playerDisplay = document.querySelector('.display-player');
    const resetbtn = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
    let isGameAvctive = true;

    const playerx_won = 'PLAYERX_WON ';
    const playero_won = 'PLAYER0_WON ';
    const tie = 'tie';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false
        for(let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a == b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer ==='X' ? PLAYERX_WON : PLAYER0_WON);
            isGameAvctive = false;
            return;
        }
    if (!board.includes(''))
        announce(tie);
    }

     const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case tie:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (box) =>{
        if (box.innerText === 'X' || box.innerText === 'O'){
            return false;
        }

        return true
    };


    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }


    const userAction = (box, index) =>{
        if(isValidAction(box) && isGameAvctive) {
            box.innerText = currentPlayer;
            box.classlist.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetboard = () =>{
        board = ['','','','','','','','',''];
        isGameAvctive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }
        box.forEach(box => {
            box.innerText = '';
            box.classList.remove('playerX');
            box.classList.remove('playerO');
        });
    }

    box.forEach((box, index) => {
        box.addEventListener('click', () => userAction(box, index));
    });



    resetbtn.addEventListener('click', resetboard);
});





