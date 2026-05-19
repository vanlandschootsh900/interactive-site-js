// Shay VanLandschoot
// 5/11/26
// Interactive Site


// background color button starts here
const root = document.documentElement;

function darkButton (){
    const dark = document.getElementById('darkmode');
    dark.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgba(37, 35, 35, 1)'
        document.body.style.color = 'white' 

        // TIC TAC TOE
        root.style.setProperty('--tictac-colortext', 'white');
        root.style.setProperty('--tictac-border', 'white');
        // TIC TAC TOE
    });
}

function lightButton (){
    const light = document.getElementById('lightmode');
    light.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        document.body.style.color = 'black'

        // TIC TAC TOE
        root.style.setProperty('--tictac-colortext', 'black');
        root.style.setProperty('--tictac-border', 'black');
        // TIC TAC TOE

    });
}

lightButton();
darkButton();

// Background color buttons end here