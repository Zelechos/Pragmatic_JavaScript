'use strict'
// Hacer un Programa Con Pruebas de error Que dado un Numero Obtenga el Factorial
window.addEventListener('load', ()=>{
    let etiqueta = document.getElementById("bod");
    etiqueta.style.backgroundColor = "black";
    etiqueta.style.color = "white";
});

let number = prompt("Digite Un Numero para hallar su Factorial : ");
let Resultado = 0;

try {
    if(isNaN(number)){
        throw new Error("El dato introducido No es un Numero!!!!")
    }
    Resultado = Factorial(number);
} catch (error) {
    console.error("Algo Salio mal ==> "+ error);
}finally{
    document.write(`<h1>El  Factorial de ${number} es ${Resultado}</h1>`);
    console.warn("Termino el Proceso");
}

// Funcion para Hayar el Factorial
function Factorial(Numero){
    if(Numero== 0 || Numero ==1){
        return 1;
    }
    return Numero * Factorial(Numero-1);
}