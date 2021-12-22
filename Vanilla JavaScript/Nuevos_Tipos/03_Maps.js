'use strict'
// el tipo de dato Map() se asemeja a un diccionario en Python

// Creamos un dato Map()
let object = new Map();

// le agregamos elementos
object.set("name", "Alex");
object.set("lastname", "Code");
object.set("age", 25);

console.log(object);

// para saber cuantos elementos tiene el map
console.log(object.size);

// para evaluar si existe el atributo
console.log(object.has("age"));
console.log(object.has("name"));
console.error(object.has("calendar"));


// obtenemos un elemento especifico
console.log(object.get("name"));

// sobrescribiendo el valor
object.set("age", 29);
console.log(object.get("age"));

object.set("name", "Alex Code");
object.delete("lastname");

console.log(object);

object.set("ssh", "asdirbq23f0f570q3h4892f570894g523h049");


// estableciendo una llave rara ATENCION : (no se recomienda hacer esto)
object.set(999, "number 999");
object.set(false, "lie");
object.set({}, "void object");


console.log(object.get(999));
console.log(object.get(false));
console.log(object.get({}));

console.log(object);

// recorremos el dato map usando destructuracion
console.error(`------------destructuracion--------------`);
for (const [key, value] of object) {
    console.log(`${key} => ${value}`);
}

// otra manera de instanciar un dato map()
console.warn(`--------------- otra manera de instanciar un dato map() ---------------`);
const map = new Map([
    ["nickname", "Argus Aphocraphex"],
    ["specialization", "Hacking"],
    ["skill", "Pentesting"]
]);

console.log(map);

// funciones para traernos todas las llaves y los valor
const keys = [...map.keys()];
const values = [...map.values()];

console.log(keys);
console.log(values);