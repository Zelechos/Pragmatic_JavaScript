'use strict'

/*-------------------------EJMEPLO 1--------------------------------*/
var Datos = document.querySelectorAll('p');
document.write("He Aqui los elementos de alamacenamiento que hizo var Datos = document.querySelectorAll('p');--------------<br>");
document.write(Datos[0].textContent+"<br>");
document.write(Datos[1].textContent+"<br>");
document.write(Datos[4].textContent+"<br>");
document.write(Datos[5].textContent+"<br><br>");

/*-------------------------EJMEPLO 2--------------------------------*/
var divs = document.querySelectorAll('h4.blanco, h4.celeste');
var div;
document.write("Probando clases con querySelectorAll--------------<br>");
for(div in divs){
    if(divs[div].className == 'blanco' || divs[div].className == 'celeste'){
        document.write("<p>"+divs[div].textContent+"</p>");
    }
}

/*-------------------------EJMEPLO 3--------------------------------*/
var container = document.querySelector('#test');
var matches = container.querySelectorAll('div.highlighted > p');
document.write("Buscando Elementos entre divs --------------<br>");
document.write(matches[0].textContent+"<br>");
document.write(matches[1].textContent+"<br>");
document.write(matches[2].textContent+"<br>");
/*-------------------------EJMEPLO 4--------------------------------*/
document.write("Para crear una lista del contenido de una etiqueta especificando dentro de los corchetes un atributo---------------------------------<br>");

var more = document.querySelectorAll('iframe[data-src]');
document.write(more[0].textContent);
document.write(more[1].textContent);

/*-------------------------EJMEPLO 5--------------------------------*/
document.write("Para crear una lista del contenido de una etiqueta especificando dentro de los corchetes un atributo---------------------------------<br>");

var container = document.querySelector('#userlis');
var match =  container.querySelectorAll('li[data-active="1"]');

document.write(match[0].textContent+"<br>");
document.write(match[1].textContent+"<br>");
document.write(match[2].textContent+"<br>");
document.write(match[3].textContent+"<br>");
/*-----------------------------------PRACTICA-------------------------------*/
document.write("----------------------PRACTICA---------------------------<br>");


var Lista = document.querySelector('#userlist');
var Gestion = Lista.querySelectorAll('li[data-active="0"]');

var List = document.querySelector('#userlis');
var Gestio = List.querySelectorAll('li[data-active="1"]');


document.write(Gestio.item(0).style.background = "red");

function Activacion(){
    var it;
    for(it in Gestio){
        if(Gestio[it].className == "g"){
            document.write(Gestio[it].textContent+"<br>");
        }
    }
}

function Desactivacion(){
        
    var it;
    for(it in Gestion){
        if(Gestion[it].className == "l"){
            document.write(Gestion[it].textContent+"<br>");

        }
    }
}


Activacion();