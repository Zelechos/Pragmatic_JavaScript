'use strict'
// Symbol es un tipo de dato primitivo
// una de sus caracteristicas que es los Symbols nos permiten crear identificadores unicos

// Definimos un Symbol
let _id = Symbol("id");
let _id1 = Symbol("id1");

console.log(_id === _id1);//nos da false porque cada Symbol es unico
console.log(typeof _id , typeof _id1);//ambos son del tipo Symbol

// definiendo un Symbol en una constante
const NAME = Symbol("name");
const LAST_NAME = Symbol("last name");
const SSH = Symbol("ssh");

// creando un objeto con un Symbol como indentificador unico
const persona = {
    [NAME] : "Alex",
    [LAST_NAME] : "Tumiri Huanca",
    date : "22-10-1996",
    profesion : "Programador"
}

console.warn(persona);
console.log(persona.profesion);

// llamando al valor de el tipo de dato Symbol()
console.log(persona[NAME]);
console.log(persona[LAST_NAME]);


persona.NAME = "etherias";

console.warn(persona);
console.log(persona.NAME);

// Creando una propiedad Symbol para el objeto ya creado!!!
persona[SSH] = () => console.log("SSH => 2470ad418a372b6cdce06f5907afa152824bb4ed");

// ejecutar una funcion que esta almacenada en un Symbol()
persona[SSH]();

console.warn(persona);

// recorriendo el objeto persona
for (const property in persona) {
    console.log(property);
    console.log(persona[property]);
}

// mostrando los datos tipo Symbol
console.log(Object.getOwnPropertySymbols(persona));
let symbolPropertys = Object.getOwnPropertySymbols(persona);

for(const privatePropertys in symbolPropertys){
    console.log(symbolPropertys[privatePropertys]);
}

// los Symbols() tambien funcionan con propiedades privadas de un objeto en js