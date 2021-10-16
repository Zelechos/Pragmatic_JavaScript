'use strict'

// Expresiones Regulares muy Importante
// repasar y estudiar mucho

let text = "Argus Aphoc1raphex Ether Zelechos etheraphocraphex etheretheretherargusargus argus ether 9";

// Declarando un Objeto de expresion regulares
let expresionRegular = new RegExp("ether", "ig");

// Diferente formato el mas usado
let expresionRegular2 = /ether{1,}/ig;

// Que dice si incluye algun Numero del 0 al 9 
let expresionRegular3 = /[0-9]/


console.log("___________ Primera Expresion Regular_____________");
console.log(expresionRegular.test(text));
console.log(expresionRegular.exec(text));

console.log("___________ Segunda Expresion Regular_____________");
console.log(expresionRegular2.test(text));
console.log(expresionRegular2.exec(text));

console.log("___________ Tecera Expresion Regular_____________");
console.log(expresionRegular3.test(text));
console.log(expresionRegular3.exec(text));

// FALTA MUCHOS ENTENDER ESO ESTUDIAR MUCHOOOO