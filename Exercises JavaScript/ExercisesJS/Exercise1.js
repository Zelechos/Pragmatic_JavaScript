"use strict";

do {
  var Number1 = parseInt(prompt("Digite un numero : ", 0));
  var Number2 = parseInt(prompt("Digite otro numero : ", 0));

  if (Number1 < Number2) {
    console.log("El numero mayor es : " + Number2);
    alert("El numero mayor es : " + Number2);
    document.write("El numero mayor es : " + Number2);
  } else if (Number2 < Number1) {
    console.log("El numero mayor es : " + Number1);
    alert("El numero mayor es : " + Number1);
    document.write("El numero mayor es : " + Number1);
  } else if (Number1 == Number2) {
    console.log("Los numeros introducidos son iguales.");
    alert("Los numeros introducidos son iguales.");
    document.write("Los numeros introducidos son iguales.");
  } else {
    alert("Introduza Numeros No Simbolos ni Caracteres");
  }
} while (isNaN(Number1) || isNaN(Number2));
