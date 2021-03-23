'use strict'


var H4S = document.getElementsByTagName('h4');

document.write("<ul>");
//H4S.forEach((element ,index) => { NO SE PUEDE USAR FOREACH PARA ARRAY DE ETIQUETAS
    //document.write("<li> "+element[index]+"</li>");
var element;
for(element in H4S){
    
    if( typeof H4S[element].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(H4S[element].textContent);
        parrafo.appendChild(texto);//tambien Funciona con prepend() y append()
        document.querySelector("#miseccion").appendChild(parrafo);
    }
    
}

var Celeste = document.getElementsByClassName('celeste');

for(let div in Celeste){
    if(Celeste[div].className == 'celeste'){
    Celeste[div].style.background = "#93CEF4";
    }
}

var Blanco = document.querySelector(".blanco");

Blanco.style.background = "white";
console.log(Blanco);

