// 2) crear una function que diga si el numero introducido por teclado es par o impar function(4) el numero es PAR
'use strict'

const parImpar = Number => (Number % 2 == 0)? console.log(Number,' es Par') : console.log(Number,' es Impar');
let number = 0;
((function(){

    do{
        number = parseInt(prompt("enter a number : "));
        if (isNaN(number)){
            alert("is not a number");
            console.error("is not a number");
        }else{
            parImpar(number);
        }

    }while(!isNaN(number));
    console.warn("code finish!!!");
})());