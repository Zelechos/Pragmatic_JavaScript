'use strict'
let number = parseInt(prompt("Digite un Numero : "));

for(let divider = 1; divider <= number; divider++) {

    if (number % divider == 0) {
        console.log("Divisor es : "+divider);
    }
}