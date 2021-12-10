'use strict'
// Iterables & Iterators

// un iterable es aquel elemento que se puede iterar
// un iterador es el puntero que recorre el iterable para acceder a todos sus datos

const iterable = [1,2,3,4,5]

// Accedemos al iterador de nuestro variable iterable
const iterator = iterable[Symbol.iterator]();

console.warn(`------ My Iterable -------`);
console.log(iterable);
console.warn(`------ My Iterator-------`);
console.log(iterator);

// el metodo next() sirve para que nuestro iterador recorra nuestro elemento iterable
// adicionalmente el metodo next() nos devuelve un objeto con el valor del elemento y la verificacion de si aun quedan elementos que iterar
// iterator.next() ==> {value : 1 ,  done: false}
console.log(iterator.next());

// accediendo al value
console.log(iterator.next().value);

// accediendo al done
console.log(iterator.next().done);

console.warn(`------ while ------ `);
// esto es funcional pero nada eficiente para ello vamos a cambiar algunas cosas
const text = "ethernet"
const pointer = text[Symbol.iterator]();

let next = pointer.next();
while(!next.done){
    console.log(next.value);
    next = pointer.next();
}


