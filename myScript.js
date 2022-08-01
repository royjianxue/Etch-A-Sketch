let color = "black";
let click = false;

function populateGrids(size){

    let numberOfGrid = size * size;
    const gridContainer = document.getElementsByClassName('grid')[0];
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    while(numberOfGrid > 0){
        let newgridDiv = document.createElement('div');
        newgridDiv.classList.add('griditem');
        newgridDiv.setAttribute("id", "gridId");
        newgridDiv.addEventListener('mouseover', colorOfGrid);
        newgridDiv.style.backgroundColor = "white";
        gridContainer.appendChild(newgridDiv);
        numberOfGrid -= 1;
    }
    printLabel(size);
}

function changeSize(input){

    if (input >=2 && input <= 100) {
        populateGrids(input);
        
    }
    else{
        alert("too many squares");
    }
}

function printLabel(labelsize){
    document.getElementById('sizeLabel').innerHTML = `Label Size: ${labelsize}x${labelsize}`;    
}


function catureInput(){
    let input = document.querySelector('textinput');
    return input.textContent;
}

function colorOfGrid(){
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        } else{
            this.style.backgroundColor = color;
        }
    }
}

function removeColor(){
    this.style.backgroundColor = "white";
}

function changeColor(newColor){
    color = newColor;
}

function resetGrid(){
    let grids = document.querySelector(".grid");
    let grid = grids.querySelectorAll("div");
    grid.forEach(div => div.style.backgroundColor = 'white');
}

populateGrids(15);


document.querySelector('body').addEventListener('click', () =>{
    click = !click;
});


















function msg(e)
{
    return e.target.className;
}

/*
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click'), (e) =>{
    let buttonSelection = msg(e);


});


*/


