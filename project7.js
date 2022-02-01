const div = document.querySelector('div'); // take div
let divX = 150;
let divY = 50;

div.style.left = divX+ "px"; // add position squere
div.style.top = `${divY}px`;

let drwaActive = false; 

let insertDivX;
let insertDivY;


div.addEventListener('mousedown', (e) => { 
    div.style.backgroundColor = 'grey';
    drwaActive = true;
    
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (event) => {
    if (drwaActive){
    divX = event.clientX;
    divY = event.clientY;
    div.style.left = divX - 50 + "px";
    div.style.top = divY - 50 + "px";
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    drwaActive = false;
})