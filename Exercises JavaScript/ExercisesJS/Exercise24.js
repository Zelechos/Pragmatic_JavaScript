// 24) Programa una función que obtenga un numero aleatorio entre 501 y 600.
'use strict'
const randomNumber = () => console.log(`random number => ${Math.round(Math.random()*(600-501)+501)}`);

// Testing
randomNumber();