'use strict'

let Num1 = 999;
let Num2 = new Number(973);
let Num3 = 345.193;

console.log(Num1);
console.log(Num2);
//toFixed() sirve para redondear numeros decimales dependiendo al numero que le pasemos como parametros
console.log(Num3.toFixed(1));

//parseInt te devuelve la parte entera de un numero decimal
console.log(parseInt(Num3));

//parseFloat te devuelve todo el numero decimal
console.log(parseFloat(Num3));

// Transformando un texto a un numero
let NumFalse = "925.435";
console.log(typeof(NumFalse));
console.log(parseFloat(NumFalse));

let Num4 = parseFloat(NumFalse);
console.log(typeof(Num4));

//Aqui se concatena el valor Num3 con Num4
console.log(Num3+NumFalse);

//para sumar los valores seria:
console.log(Num3 + parseInt(NumFalse));
console.log(Num3 + parseFloat(NumFalse));


