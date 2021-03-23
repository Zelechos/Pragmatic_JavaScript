'use strict'

//El ambito de las Variables


function Hola(texto){

    var Mensaje = "Voy pot ti ReactJS";//variable local de la funcion Hola()
    console.log(Texto);
    //metodo toString() para convetir cualquier tipo de dato a texto
    //metodo typeof() para ver que tipo de dato es
    console.log( typeof Num.toString());
    console.log(Mensaje);
}

var Num = 90;
var Texto = "Hola Soy Variable Global";

//no podemos utilizar la variable Mensaje por que es una variable local no global
//console.log(Mensaje);
Hola(Texto);