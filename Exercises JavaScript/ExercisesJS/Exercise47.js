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

console.warn( `------------ Iterators -----------------`);
const iterator = HackerClubMembers[Symbol.iterator]();

let show = iterator.next();

while(!show.done){
    console.log(show.value);
    show = iterator.next();
}

console.warn( `------------ Mostrando los Valores en una tabla -----------------`);
console.table(HackerClubMembers);


console.warn( `------------ Generators -----------------`);
// Rutina para mostrar con la funcion Generator
const ShowHacker = object => {
    return object;
}

// Funcion Generator
function* generator(){
    yield ShowHacker(HackerClubMembers[0]);
    yield ShowHacker(HackerClubMembers[1]);
    yield ShowHacker(HackerClubMembers[2]);
}

let values = generator();
for (const response of values) {
    console.table(response);
}