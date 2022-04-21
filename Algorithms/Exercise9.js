//9) Hacer un Programa Con Pruebas de error try-catch Que dado un Numero Obtenga el Factorial
'use strict'
window.addEventListener('load', ()=>{

    let etiqueta = document.getElementById("bod");
    etiqueta.style.backgroundColor = "black";
    etiqueta.style.color = "white";
});

let number = prompt("Digite Un Numero para hallar su Factorial : ");
let response = 0;

try {
    if(isNaN(number)){
        throw new Error("El dato introducido No es un Numero!!!!")
    }
    response = factorial(number);
} catch (error) {
    console.error("Algo Salio mal ==> "+ error);
}finally{
    document.write(`<h1>El  Factorial de ${number} es ${response}</h1>`);
    console.warn("Termino el Proceso");
}

// Funcion para Hayar el Factorial
const factorial = number => (number== 0 || number ==1)? 1 : number * factorial(number-1);