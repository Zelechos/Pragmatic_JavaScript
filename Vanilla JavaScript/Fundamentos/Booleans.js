'use strict'

let Verdadero = true;
let Falso = false;

console.warn("****Variables Verdadero && Falso ****");
console.log(Verdadero);
console.log(Falso);

console.warn('Tipo de dato:');
console.log(typeof(Verdadero));
console.log(typeof(Falso));


let dato = Boolean(true);
let dato1 = Boolean(false);


console.log(dato);
console.log(dato1);
console.log(typeof(dato));
console.log(typeof(dato1));

// Cosas que se puede hacer con Boolean
console.log("************************");
console.log(Boolean(234));
console.log(Boolean(-424));
console.log(Boolean("si hay una cadena"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(Infinity));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));