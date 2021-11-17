// Aplicando la recursividad en una funcion
'use strict'

let number = 10;

function Saludo(cantidadSaludos) {

    if(cantidadSaludos > 0) {
        console.log(cantidadSaludos+" .- Hello");
    }else{
        return console.warn("Good bye");
    }
    
    return Saludo(cantidadSaludos-1);
}

Saludo(number);