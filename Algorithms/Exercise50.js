// 50) Crear una funcion en base a un numero devuelva que numer de la Sucesion de fibonacci es
'use strict'

const d = document;
let number = Number(prompt("enter a number : ",0));

function fibonacci(number){

    if(number == 0) return 0;
    if(number == 1 || number == 2) return 1;
    else return fibonacci(number-1) + fibonacci(number-2);
    
}

d.addEventListener('DOMContentLoaded', e =>{
    d.querySelector("body").innerHTML += `<h3>the number fibonacci is : ${fibonacci(number)}</h3>`;
});

// Demostracion de lo que
// number=5
//                     fibonacci(4)               +            fibonacci(3)
//          fibonacci(3)     +      fibonacci(2)  + fibonacci(2)     +      fibonacci(1)
//fibonacci(2) + fibonacci(1)+    1   +  1   +   1
//    1         +    1      +            3
//   5
