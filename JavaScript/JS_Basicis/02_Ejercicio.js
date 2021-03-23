'use strict'

do{
var Number = parseInt(prompt("Digite un Numero : "));

    if (isNaN(Number)){

        alert("No es un Numero");

    }else{

        if (Number % 2 == 0){
            document.write("El Numero es Par <br>");
        }else{
            document.write("El Numero es Impar <br>");
        }

    }
}while(isNaN(Number));

document.write("El Numero es : "+Number);
