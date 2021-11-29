'use strict'

// El tipo de dato set() es un array que solo puede tener valores unicos
let ssh = Symbol("ssh");
const array = [1,2,3,4,5,5,5,"ether","ETHER",ssh, {}, {}, true, false, false, ssh];

const set = new Set(array);
console.log(set);
//metodo para saber la longitud de elementos del set()
console.log(set.size);

const ones = [1,1,1,1,1,1,1,1,1,1,1,1];
const set2 = new Set();
// metodo para agregar valores a nuestro set()
set2.add(1);
set2.add(1);
set2.add(2);

// aqui agregamos todos los unos del array ones pero como es un set lo ignora
ones.forEach( element => {
    set2.add(element);
}); 

set2.add(false);
set2.add(true);
set2.add(false);

console.log(set2);
console.log(set2.size);


// mostrando valores con un bucle
console.log(`=========== mostrando los elementos del set ===========`);
console.warn(set);
for (const item of set) {
    console.log(item);
}

console.log(`=========== mostrando los elementos del set2 ===========`);
console.warn(set2);
set2.forEach(item => {
    console.log(item);
});

console.log(`=========== accediendo a un elemento determinado del set ===========`);
// accediendo a una posicion determinadad del set()
// para acceder debemos convertir el dato de tipo set() a un Array
console.warn(set);
const cloneSet = Array.from(set);

// ahora si podemos acceder
console.log(cloneSet[0]);
console.log(cloneSet[3]);
console.log(cloneSet[cloneSet.length - 1]);

// metodo para eliminar los elementos de nuestro set()
console.warn(set);
set.delete(1);
set.delete(ssh);
console.warn(set);

// metodo para saber si existe ese elementos en nuestro set()
console.log(set.has(2));
console.log(set.has(ssh));
console.log(set.has("ETHER"));
console.log(set.has("infinito"));


// metodo para limpiar los elementos de nuestro set()
set2.clear();
console.log(set2);









