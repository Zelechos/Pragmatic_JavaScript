'use strict'

// Objeto console
console.log(console.memory);
console.error("Error detectado");
console.warn("Esta a 3 segundos de caer el servidor");
console.info("mensaje de informacion");

const Persona =  {
    nombre : "Alex",
    apellido : "Tumiri Huanca",
    edad : 25,
    github : "https://github.com/Zelechos"
}

console.log(Persona.nombre);
console.log(Persona.apellido);
console.log(Persona.edad);

// una sola linea
console.log(Persona.nombre, Persona.apellido, Persona.edad);

// interponlando varibles
console.log(` Hola soy ${Persona.nombre} ${Persona.apellido} y mi edad es ${Persona.edad} `);

// con almohadillas o comodines
console.log(` Hola soy %s %s y mi edad es %d `, Persona.nombre , Persona.apellido, Persona.edad);

console.clear();

console.log(window);
console.log(document);
console.dir(document);

console.clear();

// grupos en la consola
console.group("Lenguajes de Programacion Mejores Pagados : ");
console.log("JavaScript");
console.log("Java");
console.log("Python");
console.log("Rust");
console.log("Go");
console.log("TypeScript");
console.groupEnd();

console.groupCollapsed("Lenguajes de Programacion Mas Antiguos : ");
console.log("COBOL");
console.log("Pascal");
console.log("C");
console.log("Assembler");
console.groupEnd();

console.clear();

// Crea una tabla
console.table(Object.entries(console).sort());
console.clear();

const numbers = [1,2,3,4,5] , vowels = ["a","e","i","o","u"];

// Se puede utilizal la tabla par ver tambien array aparte de los objetos
console.table(numbers);
console.table(vowels);

// y vemos tambien mi objeto anteriormente creado persona
console.table(Persona);
console.clear();

// time sirve para medir cuanto tiempo tarda la ejecucion de la porcion de codigo adentro de los console.time();
console.time("Compilation Time ==> ");
const array = Array(100000);
for (let index = 0; index < array.length; index++) {
    if(index % 2 == 0){
        array[index] = "ether";
    }else{
        array[index] = "zelechos";
    }
}
console.timeEnd("Compilation Time ==> ");
console.log(array);

console.clear();

for (let index = 0; index < 100; index++) {
    console.count("for code");
    console.log(index);
}

console.clear();

// assert para comparaciones y pruebas unitarias basicas
let x = 5 , y = 2, test = "se espera que x siempre sea menor que y";
console.assert(x < y , {x , y , test});
