// 1) Programa una Funcion que dado de Numeros retorne cual es el mayor
import { validateNumber } from './validations.js';
'use strict';

let Number1 = parseInt(prompt("Digite un numero : ", 0));
let Number2 = parseInt(prompt("Digite otro numero : ", 0));

((function(Number1, Number2){
  
  if (validateNumber(Number1) && validateNumber(Number2)){
    if (Number1 < Number2) {
      console.log("El numero mayor es : " + Number2);
      alert("El numero mayor es : " + Number2);
      document.write("El numero mayor es : " + Number2);
    } else if (Number2 < Number1) {
      console.log("El numero mayor es : " + Number1);
      alert("El numero mayor es : " + Number1);
      document.write("El numero mayor es : " + Number1);
    } else {
      console.log("Los numeros introducidos son iguales.");
      alert("Los numeros introducidos son iguales.");
      document.write("Los numeros introducidos son iguales.");
    } 
  } else {
    alert("Introduza Numeros No Simbolos ni Caracteres");
  }

})(Number1, Number2));