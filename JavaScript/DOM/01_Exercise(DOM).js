"use strict"
      //DOM Document Object Model
      
let box = document.querySelector("#box");

function catchData(){
      let data = document.getElementById("color");
      let color = data.value;
      changeColor(color);
}

function changeColor (color) {
      box.style.background = color;
      box.style.width = "50px";
      box.style.fontSize = "25px";
      box.style.textAlign = 'center';
      box.style.margin = "auto";
      box.style.padding = "50px";
      box.style.cursor= "pointer";
      box.style.borderRadius= "120px";
      box.innerHTML = color;
      box.className = "Cuadro";
      box.setAttribute("onclick" ,"Crecer();");
}

function Crecer(){
      box.style.width = "100px";
      box.style.padding = "100px";
      box.setAttribute("onclick" ,"Reducir();") ;
}

function Reducir(){
      box.style.width = "50px";
      box.style.padding = "50px";
      box.setAttribute("onclick" ,"Crecer();") ;
}

var Imagen = document.getElementById("Metodo 1");

/*function Fondo (){
    Imagen.style.backgroundImage = 'url("img/Lawrencium.jpg")';
    Imagen.style.width = "1000px";
    Imagen.style.height = "1000px";
}*/

var Body = document.querySelector("body");
function Fondo (){
  Body.style.backgroundImage = 'url("img/Lawrencium.jpg")';
  Body.style.color = "white";
}


 //Seleccionando un elemento mediante su ID
 //var box = document.getElementById("box");
 
 //Seleccionando elementos con query
 
console.log(box);
console.log(Imagen);
Fondo();

