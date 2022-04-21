// 47) Iterar un Array de Objetos con Iterators y Generators y Mostrarlos por consola en una tabla

// Creamos el Objeto
const HackerClubMembers = [

    {
        nickname: "etherias",
        age: 29,
        specialty: "pentesting",
        stack: ["C", "C++", "C#"],
        hacks: "Nasa"
    },

    {
        nickname: "argus",
        age: 31,
        specialty: "artificial intelligence",
        stack: ["C", "Rust", "Python"],
        hacks: "Open IA"
    },

    {
        nickname: "aphocraphex",
        age: 19,
        specialty: "malware engineer",
        stack: ["PHP", "SQL", "MySQL"],
        hacks: "Microsoft"
    }

];

console.warn(`------------ Iterators -----------------`);
const iterator = HackerClubMembers[Symbol.iterator]();

let show = iterator.next();

while(!show.done){
    console.log(show.value);
    show = iterator.next();
}

console.warn( `------------ Mostrando los Valores en una tabla -----------------`);
console.table(HackerClubMembers);


console.warn( `------------ Generators -----------------`);
// Rutina para mostrar elementos con la funcion Generator
const showHacker = object => object;

// Funcion Generator
function* generator(){
    console.log("first sentence");
    yield showHacker(HackerClubMembers[0]);
    console.log("second sentence");
    yield  showHacker(HackerClubMembers[1]);
    console.log("third sentence");
    yield  showHacker(HackerClubMembers[2]);
}

// Funcion Generator aplicando un bucle
function* generatorLoop(){
    for (const index in HackerClubMembers) {
        console.error(`sentence number : ${index}`);
        yield HackerClubMembers[index];
    }
}

console.warn( `------------ loop function Generator-----------------`);
let valuesLoop = generatorLoop();
for (const response of valuesLoop) {
    console.error(response);
}

console.warn( `------------ normal function Generator-----------------`);
let values = generator();
for (const response of values) {
    console.log(response);
}