'use strict'

let Num = 10;

function Saludo(CantidadSaludos) {

    if(CantidadSaludos > 0) {
        console.log(CantidadSaludos+" .- Hola");
    }else{
        return console.log("Adios");
    }
    
    return Saludo(CantidadSaludos-1);
}

Saludo(Num);