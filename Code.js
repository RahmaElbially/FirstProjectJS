var div = document.getElementById("contents");
var h2 = document.getElementById("background");
var p = document.getElementById("name");
var btn = document.querySelector("#btn");


const arrColors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function randomColors(){
    return Math.floor(Math.random()*arrColors.length);
}

btn.addEventListener('click', ()=>{
    let hexa = "#";
    let i;
    for(i = 0; i < 6; i++){
        hexa += arrColors[randomColors()];
    }
    document.body.style.backgroundColor = hexa;
    p.innerHTML = hexa;
});



































/*
var div = document.getElementById("contents");
var h2 = document.getElementById("background");
var p = document.getElementById("name");
var button = document.querySelector("#btn");


const colorsName = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function randomColors(){
    return Math.floor(Math.random()*colorsName.length);
};

button.addEventListener('click' , ()=>{
    let hexa = "#";
    let i ;
    for (i = 0; i < 6; i++){
        hexa += colorsName[randomColors()];
    }
    document.body.style.backgroundColor = hexa;
    p.innerHTML = hexa;
})
*/