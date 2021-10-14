'use strict'

// Expresiones Regulares muy Importante
// repasar y estudiar mucho

let text = "Argus Aphocraphex Ether Zelechos etheraphocraphex etheretheretherargusargus argus ether 9";

// Declarando un Objeto de expresion regulares
let expresionRegular = new RegExp("ether", "ig");

// Diferente formato el mas usado
let expresionRegular2 = /ether{1,}/ig;

console.log("___________ Primera Expresion Regular_____________");
console.log(expresionRegular.test(text));
console.log(expresionRegular.exec(text));

console.log("___________ Segunda Expresion Regular_____________");
console.log(expresionRegular2.test(text));
console.log(expresionRegular2.exec(text));

