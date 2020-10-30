'use strict'

//Cadena creada de Forma Primitiva
const texto1 = "Esto es una cadena de Texto Primitiva";
console.log(texto1);

//Cadena creada como un Objeto
const texto = new String("Esto es un Objeto String");
console.log(texto);
console.log(texto[11]);

//Aqui mostramos el objeto estring mediante un bucle for
for (let x=0; x < texto.length; x++){
    console.log(texto[x]);
}

console.log("Cadena convertida todas las letras en mayusculas con el Metodo toUpperCase()");
console.log(texto1.toUpperCase());

console.log("Cadena convertida todas las letras en minusculas con el Metodo toLowerCase()");
console.log(texto1.toLowerCase());

//includes sirve para ver si existe dicha palabra que buscamos en el string
let Frase = "Nuestros Impulsos , crean Energia y la Energia Afecta la Realidad";
console.log(Frase.includes("Impulsos"));


//trim() es para quitar los espacios en blanco que tiene en los extremos el string
let poema = "    el final           ";
console.log(poema.trim());

//split() para converitr una cadena en una array en js
let DARK = "El principio es el Fin y el Fin es el Principio";

//mete el string completo al array en una sola posicion
console.log(DARK.split());

//separa el string en diferentes posiciones del array segun sus espacios
console.log(DARK.split(" "));

//separa el string por letras enlas diferentes posiciones del array 
console.log(DARK.split(""));


let Correo = "zelechos"+9+"@hotmail.com";
console.log(Correo);
//Para Convertir cualquier valor a un String 
let cadena = String(Correo);
console.log(cadena);
