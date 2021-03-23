"use strict"

 //DOM Document Object Model
//var Color = prompt("Digite el Color de fondo que quiera : ");

var Caja = document.querySelector("#Caja");
function Capturar(){
      var Dato= document.getElementById("Color");
      var Color = Dato.value;
      CambioDeColor(Color);
}

function CambioDeColor (Color) {
      Caja.style.background = Color;
      Caja.style.width = "50px";
      Caja.style.fontSize = "25px";
      Caja.style.textAlign = 'center';
      Caja.style.margin = "auto";
      Caja.style.padding = "50px";
      Caja.style.cursor= "pointer";
      Caja.style.borderRadius= "120px";
      Caja.innerHTML = Color;
      Caja.className = "Cuadro";
      Caja.setAttribute("onclick" ,"Crecer();");
  }

function Crecer(){
      Caja.style.width = "100px";
      Caja.style.padding = "100px";
      Caja.setAttribute("onclick" ,"Reducir();") ;
}

function Reducir(){
      Caja.style.width = "50px";
      Caja.style.padding = "50px";
      Caja.setAttribute("onclick" ,"Crecer();") ;
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
 //var Caja = document.getElementById("Caja");

 //Seleccionando elementos con query

 console.log(Caja);
 console.log(Imagen);


Fondo();


