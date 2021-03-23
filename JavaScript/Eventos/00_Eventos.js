'use strict'


function CambioColor(){
    
    var bg = Boton.style.backgroundColor;
    
    if( bg == "green"){
        Boton.style.backgroundColor = "red";
    }else{
        Boton.style.backgroundColor = "green";
    }

    Boton.style.padding = "10px";
    Boton.style.border = "1px solid #ccc";

    return true;
}

var Boton = document.querySelector('#Boton');
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
        console.log(this);
        this.style.backgroundColor = "#ccc";
    }
);

// mouseout = Exited
Boton.addEventListener('mouseout'
    ,()=>{
        CambioColor();
        this.style.backgroundColor = "blue";
    }
);

var i = 10;
var parrafo = document.createElement('p');
parrafo.append("Linux");
var jo = document.querySelector('p');
document.write(parrafo.innerHTML);

parrafo.addEventListener("click" 
,()=>{
    i++;
    parrafo.style.fontSize = i+"px";
} 
);
console.log(parrafo);


