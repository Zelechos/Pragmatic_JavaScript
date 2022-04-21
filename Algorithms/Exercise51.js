// 51) Crear un programa que en base a la recursividad genere una cantidad de saludos
'use strict'

let number = 10;

function greetings(numberOfGreetings) {

    if(numberOfGreetings > 0) {
        console.log(numberOfGreetings+" .- Hello");
    }else{
        return console.warn("Good bye");
    }
    
    return greetings(numberOfGreetings-1);
}

greetings(number);