'use strict'

function HelloWorld(Mensaje){
    //Variables Local no pueden ser usadas fuera de una funcion 
    var IP = "192.0.0.23";
    console.log(Mensaje);
    console.log(Numero);
    console.log(IP);

}

//Variables GLobales puedes ser usadas en una funcion
var Numero  = 99;
var Mensaje = "Hello soy una variables global. ";
HelloWorld(Mensaje);
