'use strict'

//Constants
let web = "https://ArgusAphocraphex.com";
const IP = "198.0.0.15";
console.log(web , IP);

web = "https://Etherias.com";
console.log(web , IP);

console.log("\n***************Const*****************\n");
/*
    para denotar las constantes que son valores que no cambiaran 
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
    edad: 999,
    web: "https://ArgusAphocraphex.com"
}

/*
    como es un objeto variable se le puede agregar
    atributos como correo incluso mas atributos ...
*/
console.log(Persona);
Persona.correo = "zelechos@hotmail.com";
console.log("El correo de la Persona a sido agregado");
console.log(Persona);
Persona.sshKey = "F23jf24tybgp3v234v234tcfn34t20347thf34t70";
console.log("La llave SSH ha sido creado");
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
console.log("La Familia de Lenguajes C .. ha sido agregado");
Lenguajes.push("C")
Lenguajes.push("C++")
Lenguajes.push("C#")
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
console.log("*********Array creado con const********");

const AreasIA = ['Vision por Computadora', 'Procesamiento del Lenguaje Natural']
console.log(AreasIA);

console.log("Se agrego Big Data a las Areas de IA");
AreasIA.push('Big Data')
console.log(AreasIA);


