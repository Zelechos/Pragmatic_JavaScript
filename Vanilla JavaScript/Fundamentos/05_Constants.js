'use strict'

//Constants
let web = "https://ArgusAphocraphex.com";
const IP = "198.0.0.15";
console.log(web , IP);

web = "https://Etherias.com";
console.log(web , IP);

console.log("\n***************Const*****************\n");
/*
    para denotar las constantes valores que no cambiaran 
    a lo largo del Programa en este caso tu script
*/
const PI = 3.1416;
//PI = 9 ; --> esto no se puede hacer porque causa un error
console.log(PI); 

//Aqui creamos un objeto JSON

console.log("Creacion de Objeto Persona:");
let Persona = {
    nombre: "Argus",
    apellido: "Aphocraphex",
    edad: 999
}

/*
    como es un objeto variable se le puede agregar
    atributos como correo incluso mas atributos ...
*/
console.log(Persona);
Persona.correo = "zelechos@hotmail.com";
console.log("El correo de la Persona a sido agregado");
console.log(Persona);


//Aqui creamos un Array
console.log("Creacion de Array Lenguajes de Programacion:");
let Lenguajes = ['JavaScript','Java','Python'];

/*
debido a que nuestro Array tambien es una variable entonces
tambien podemos agregarle datos la cantidad que nosotros queramos..
*/
console.log(Lenguajes);
console.log("El lenguaje Go ha sido agregado...");
Lenguajes.push("Go")
console.log(Lenguajes);

/* 
como los objetos y arrays son tipos de Datos compuestos 
si les ponemos en ves de let, el tipo const
igual funcionaria ya que son exactemente eso tipos de Datos 
Compuestos y podemos agregar y quitar valores
*/
console.log("*********Objeto creado con const********");

const IA = {
    nombre: "Morgan",
    ip: "0032.53236.3423.2343"
}

console.log(IA);
IA.nacimiento = '22/10/2020';
console.log("Acabo de agregar su fecha de creacion:");
console.log(IA);

// Entonces con datos compuestos const no funciona

