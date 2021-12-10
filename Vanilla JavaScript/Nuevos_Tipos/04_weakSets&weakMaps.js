'use strict'
// weakSets & weakMaps no son objetos iterables

// Weak Sets ==> es una version mas pequeña del Set()

// no podemos agregar elementos a un WeakSet() asi por que da error
// const weakSet = new WeakSet([1,23,4,false,5,6,false,{},{},"hola","Hola"]);

console.warn(`---------------- weak sets ----------------`);

// para agregar valores a un weakset no se puede hacer directamente se agrega valores con el metodo add
const weakSet = new WeakSet();

let value1 = {"value1": 1};
let value2 = {"value2": 2};
let value3 = {"value3": 3};

// agregamos elemetos a nuestro weakset
weakSet.add(value1);
weakSet.add(value2);

console.log(weakSet);

// preguntamos si un elemento existe en el weakset
console.log(weakSet.has(value1));
console.log(weakSet.has(value3));

// para eliminar datos del weakset
weakSet.delete(value2);
console.log(weakSet);


weakSet.add(value2);
weakSet.add(value3);
console.log(weakSet);


// Creamos un set Interval
console.warn(`---------------- exercise weakset ----------------`);
let show = setInterval(()=>console.log(weakSet), 1000);

let stop = setTimeout(()=>{
    value1 = null;
    value2 = null;
    value3 = null;
}, 5000);

// limpiando los timers
clearInterval(show);
clearTimeout(stop);


console.warn(`---------------- weak maps ----------------`);
// Weak Maps ==> es una version mas pequeña del Map()

// al igual que los weaksets no se puede definir un weakmap asi provoca error

// const weakMap = new WeakMap([
//     ["nickname" , "etherias"],
//     ["specialization" , "Hacking"],
//     ["skill" , "coding everthing"]
// ]);


const weakMap = new WeakMap();


let key1 = {};
let key2 = {};
let key3 = {};

// agregamos elementos al nuestro weakmap con  el metodo set
weakMap.set(key1 , "2fb357923847g3h45wfop3847f5ow34h5fow34");
weakMap.set(key2 , "ethernet");
weakMap.set(key3 , "code");

console.log(weakMap);


// tambien podemos ver si existe un elemento en el weakmap
console.log(weakMap.has(key1));
console.log(weakMap.has(key2));
console.log(weakMap.has(key3));

// para obtener los elementos se usa el metodo get
console.log(weakMap.get(key1));
console.log(weakMap.get(key2));
console.log(weakMap.get(key3));

// para eleminar un elemento se usa el metodo delete
weakMap.delete(key3);
console.log(weakMap);

weakMap.set(key3, "code is all");


console.warn(`---------------- exercise weakmap ----------------`);
setInterval(()=>console.log(weakMap), 1000);
setTimeout(()=>{
    key1= null;
    key2= null;
    key3= null;
}, 5000);



