'use strict'

var Texto = document.querySelector("#Texto");

var Size = 10;
function Tamaño(){
    Texto.style.fontSize = Size+"px";
    Texto.style.textAlign = "center";
    Texto.style.cursor = "pointer";
    Texto.style.margin = "auto";
    Texto.setAttribute("onclick","Tamaño();");
    Size++;
}

Tamaño();
console.log(Texto);
