// Shay VanLandschoot
// 5/11/26
// Interactive Site


// background color button starts here

function darkButton (){
    const dark = document.getElementById('darkmode');
    dark.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgba(37, 35, 35, 1)'
        document.body.style.color = 'white' 
    });
}

function lightButton (){
    const light = document.getElementById('lightmode');
    light.addEventListener('click', () => {
        document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        document.body.style.color = 'black'
    });
}

lightButton();
darkButton();

// Background color buttons end here