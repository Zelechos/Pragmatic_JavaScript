'use strict'

window.addEventListener('load', ()=>{



const Boton = document.querySelector('#Boton');

//un Oyente de Accion
Boton.addEventListener('click'
    ,()=>{
        CambioColor();  
    }
);

// mouseover = Entered
Boton.addEventListener('mouseover'
    ,()=>{
        CambioColor();
        Boton.style.backgroundColor = "#ccc";
    }
);

// mouseout = Exited
Boton.addEventListener('mouseout' , ()=>{
        CambioColor();
        Boton.style.backgroundColor = "blue";
});


// Agrandando el texto con clicks

let increment = 33;
let number = 0;

const title = document.querySelector("#title");
title.style.cursor = "pointer";

title.addEventListener('click' , ()=>{
    effectTitle();
});

function effectTitle (){
    title.style.fontSize = increment+"px";
    if(increment % 2 == 0){
        title.textContent = number;
        title.style.backgroundColor = `#000${number}`;
    }else{
        title.textContent = number;
        title.style.backgroundColor = `#888${number}`;
    }
    number++;
    increment++;
}

function CambioColor(){
    
    let bg = Boton.style.backgroundColor;
    
    if( bg == "green"){
        Boton.style.backgroundColor = "red";
    }else{
        Boton.style.backgroundColor = "green";
    }

    Boton.style.padding = "10px";
    Boton.style.border = "1px solid #ccc";

    return true;
}

});

