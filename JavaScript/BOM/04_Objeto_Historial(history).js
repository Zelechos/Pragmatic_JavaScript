'use strict'

console.warn("--------------- Objeto URL(location) ---------------");

// para empezar tenemos el objeto history
console.log(history);

// Sirve para mostrar cuantas paginas tenemos en el historial
console.log(history.length);

// Sirve para ir atras en el historial se puede poner la cantidad que quieras ir atras
console.log(history.back(3));

// Sirve para ir adelante en el historial se puede poner la cantidad que quieras ir adelante
console.log(history.forward(3));

// Sirve para ir adelante o atras en el historial
// para ir adelante
console.log(history.go(3));
// para ir atras
console.log(history.go(-3));





