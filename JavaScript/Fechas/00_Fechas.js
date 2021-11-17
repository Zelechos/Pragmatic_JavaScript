'use strict'

//Fechasss
let Fecha =  new Date();

let year = Fecha.getFullYear();
let month = Fecha.getMonth();
let date = Fecha.getDate();
let day = Fecha.getDay();
let hour = Fecha.getHours();


let Tiempo = `
    El Año es : ${year}
    El Mes es : ${month}
    El Dia es : ${day}
    El Fecha es : ${date}
    La Hora es : ${hour}
`;

console.log(Fecha);
console.log(Tiempo);

//Funciones MATH
console.log(Math.ceil(Math.random()*10000));