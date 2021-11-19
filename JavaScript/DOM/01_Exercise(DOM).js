"use strict"
      //DOM Document Object Model
      
let box = document.getElementById("box");

function catchData(){
      let data = document.getElementById("color");
      let color = data.value;
      changeColor(color);
}

function changeColor(color) {
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
      box.setAttribute("onclick" ,"growingUp();");
}

function growingUp(){
      box.style.width = "100px";
      box.style.padding = "100px";
      box.setAttribute("onclick" ,"reduce();") ;
}

function reduce(){
      box.style.width = "50px";
      box.style.padding = "50px";
      box.setAttribute("onclick" ,"growingUp();") ;
}