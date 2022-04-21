// Aplicando la recursividad en una funcion
'use strict'

let number = 10;

function saludo(cantidadsaludos) {

    if(cantidadsaludos > 0) {
        console.log(cantidadsaludos+" .- Hello");
    }else{
        return console.warn("Good bye");
    }
    
    return saludo(cantidadsaludos-1);
}

saludo(number);