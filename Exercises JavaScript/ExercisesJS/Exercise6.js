'use strict'
var Numero;
function hola(Numero){
    if(Numero <= 0 ){
        return console.log("Descarga Completa.");
    }else{
        console.log("Descargando. . .");
    }
    return hola(Numero-1);
}
hola(10);