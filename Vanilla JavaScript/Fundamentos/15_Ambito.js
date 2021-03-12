'use strict'

function HelloWorld(Mensaje){
    //Variables Local no pueden ser usadas fuera de una funcion 
    let IP = "192.0.0.23";
    console.log(Mensaje);
    console.log(Numero);
    console.log(IP);

}

//Variables GLobales puedes ser usadas en una funcion
let Numero  = 99;
let Mensaje = "Hello soy una variables global. ";
HelloWorld(Mensaje);
