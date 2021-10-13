'use strict'

// ATENCION : ver la libreria momentjs

// Objecto Date
console.log(Date());

let fecha = new Date();
console.log(fecha);

console.log(`Dia del Mes : ${fecha.getDate()}`);

// el metodo getDay() te devuelve el dia en numero del 0..6 
switch(fecha.getDay()){
    case 0:
        console.log(`El dia  ${fecha.getDay()} es Domingo`);
    break;

    case 1:
        console.log(`El dia  ${fecha.getDay()} es Lunes`);
    break;

    case 2:
        console.log(`El dia  ${fecha.getDay()} es Martes`);
    break;

    case 3:
        console.log(`El dia  ${fecha.getDay()} es Miercoles`);
    break;

    case 4:
        console.log(`El dia  ${fecha.getDay()} es Jueves`);
    break;

    case 5:
        console.log(`El dia  ${fecha.getDay()} es Viernes`);
    break;

    case 6:
        console.log(`El dia  ${fecha.getDay()} es Sabado`);
    break;
}


// getMonth() para saber el mes del 0 .. 11
console.log(fecha.getMonth());


const month = mes => (mes === 9)? console.log("este mes es tu cumple") : console.log("no es tu cumple este mes");

month(fecha.getMonth());

// Tiempo en horas para abajo
console.log("horas "+fecha.getHours());
console.log("minutos "+fecha.getMinutes());
console.log("segundos "+fecha.getSeconds());
console.log("milisegundos "+fecha.getMilliseconds());


// Extrayendo datos predeterminados por los metodos
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCHours());

console.log(Date.now());

console.log("---------------------------------------------------");

// getFullYear() te devuelve el año no usar getYear()
console.log(fecha.getFullYear());

let tuEdad = prompt("Digite el año en que naciste : ");
let respuesta = fecha.getFullYear() - tuEdad;
document.write(`<h1>Tienes ${respuesta} años de edad ;) </h1>`);

const mayor = edad => (edad > 18)? document.write(`<h2> eres mayor de edad ;) </h2>`) : document.write(`<h2> eres menor de edad :( </h2>`);
mayor(respuesta);