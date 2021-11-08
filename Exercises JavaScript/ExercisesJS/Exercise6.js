'use strict'
let number;
function hello(number){
    if(number <= 0 ){
        return console.log("Descarga Completa.");
    }else{
        console.log("Descargando. . .");
    }
    return hola(number-1);
}

// Testing
hola(10);