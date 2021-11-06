'use strict'

let number = parseInt(prompt("Digite un Numero : "));

for(let Divisor = 1; Divisor <= number; Divisor++) {

    if (number % Divisor == 0) {
        console.log("Divisor es : "+Divisor);
    }

}
