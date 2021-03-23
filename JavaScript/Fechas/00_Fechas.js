'use strict'

//Fechasss
var Fecha =  new Date();

var year = Fecha.getFullYear();
var month = Fecha.getMonth();
var date =Fecha.getDate();

var day = Fecha.getDay();
var hour = Fecha.getHours();


var Tiempo = `
    El Año es : "${year}",
    El Mes es : ${month}
    El Dia es : ${day}
    El Fecha es : ${date}
    La Hora es : ${hour}
`;
console.log(Fecha);
console.log(Tiempo);

//Funciones MATH

console.log(Math.ceil(Math.random()*10000));