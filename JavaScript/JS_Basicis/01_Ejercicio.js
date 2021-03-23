'use strict'

var Numero = parseInt(prompt("Digite un Numero : "));

for(var Divisor = 1; Divisor <= Numero; Divisor++) {

    if (Numero % Divisor == 0) {
        console.log("Divisor es : "+Divisor);
    }

}
