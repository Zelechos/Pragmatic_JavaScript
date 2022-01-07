'use strict'

//El ambito de las letiables


function Hola(texto){

    let Mensaje = "Voy pot ti ReactJS";//letiable local de la funcion Hola()
    console.log(Texto);
    //metodo toString() para convetir cualquier tipo de dato a texto
    //metodo typeof() para ver que tipo de dato es
    console.log( typeof Num.toString());
    console.log(Mensaje);
}

let Num = 90;
let Texto = "Hola Soy letiable Global";

//no podemos utilizar la letiable Mensaje por que es una letiable local no global
//console.log(Mensaje);
Hola(Texto);