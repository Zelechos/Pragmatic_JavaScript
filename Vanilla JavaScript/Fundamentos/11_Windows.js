'use strict'

//ALERTAS
/*
alert("Joderrrr");
alert("mas rapido");
*/
//CONFIRMACION
let resultado = confirm("Estas seguro de ir mas Rapido");
console.log(resultado);

//MAS EJEMPLOS
let confirmacion = confirm("Estas seguro de que quieres descargar el achivo??? ");
if(confirmacion){
    console.error("Bienvenido Almundo del Hacking ");
}else{
    console.warn("HOla tranquilo no paso nada");
}


//INGRESAR DATOS
let respuesta = prompt("Que tan rapido quieres Aprender JavaScript", "muy rapido");
console.log(respuesta);

//MAS EJEMPLOS
let Login = prompt("Introduzca su cuenta Hacker : \n Login", "Ether");
let Password = prompt("Password");

if(Login === "Ether" && Password === "fuck"){
    console.warn("Acceso Permitido");
}else{
    console.error("Usted NO es un Hacker de Google ");
}