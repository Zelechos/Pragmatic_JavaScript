'use strict'

var Number;

function Impar_O_Par (Numero ,Par , Impar) {
    if (Numero % 2 == 0) {
        Par();
    }else{
        Impar();
    }
}


Impar_O_Par(
    Number = parseInt(prompt("Digite un Numero : ")),
Mensaje=>{
    document.write("El numero es Par.");
},
MensajeImpar=>{
    document.write("El numero es Impar.");
}
);