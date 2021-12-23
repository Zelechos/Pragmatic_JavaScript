'use strict'

// Propiedades Dinamicas de los Objetos

// En este codigo aprenderemos a generar propiedades dinamicas de nuestro objetos users

// Creamos Nuestro objeto users vacio

// definimos un numero aleatorio
let numberAleatorio = Math.round(Math.random() * 1000);//0 al 1000

const users = {
    [`id_${numberAleatorio}`]:"dinamic value"
}

const nameUsers = ["Alex", "Agnes", "Linus", "Steve"];

nameUsers.forEach((name, index) => users[`id_${index}`] = name);
console.log(users);