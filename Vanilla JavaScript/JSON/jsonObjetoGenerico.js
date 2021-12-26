'use strict';

// creamos un objeto generico en javascript
const json = {
    cadena: "Alex",
    numero: 99,
    booleano: true,
    arreglo: ["uno", "dos", "tres"],
    objeto:{
        twitter: "@CoderPragmatic",
        email: "zelechos@gmail.com",
    },
    nulo: null
}

console.log(json);

// Ejemplos de como consumir nuestro archivo JSON
console.log(JSON);

// JSON.parse() Analiza una cadena de texto como JSON y lo convierte a un valor valido en js
console.warn(`------------ usando el metodo parse() ---------------------`);

// esto no son simples llaves esto gracias al metodo parse se reconoce como un objeto
console.log(JSON.parse("{}"));

// de igual manera con un array
console.log(JSON.parse("[1, 2, 3]"));

// y lo mismo con los diferentes tipos de datos
console.log(JSON.parse("false"));
console.log(JSON.parse("29"));
// console.log(JSON.parse("'Hello World'"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));


// JSON.stringify() Convierte un objeto o valor de JS en una cadena de texto JSON
console.warn(`------------ usando el metodo stringify() ---------------------`);

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(99));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2,y:4}));
console.log(JSON.stringify(json));

// de JSON a objeto de javascript
console.log(JSON.parse('{"cadena":"Alex","numero":99,"booleano":true,"arreglo":["uno","dos","tres"],"objeto":{"twitter":"@CoderPragmatic","email":"zelechos@gmail.com"},"nulo":null}'));




