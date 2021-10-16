'use strict'
import greet, {PI, Greet} from "./constants.js";

// import {add, subtract, divide, multiply} from "./arithmetic.js";
// aqui comprimimos nuestras rutina en un objeto para una mejor importacion
// as sirve para crear nuevo nombre de esa variable
import link, {operations as tutifruti} from "./arithmetic.js";

console.log("archivo module.json");
console.log("para navegadores actuales");
console.log(PI);

// console.log(operations.add(5,4));
// console.log(operations.subtract(5,4));
// console.log(operations.divide(5,4));
// console.log(operations.multiply(5,4));

// aqui los nombre del objeto cambio a titufruti
console.log(tutifruti.add(5,4));
console.log(tutifruti.subtract(5,4));
console.log(tutifruti.divide(5,4));
console.log(tutifruti.multiply(5,4));
greet();
console.log(link);

const greetfast = new Greet();
greetfast;