// 12) crear una clase MathModules y usar prototypes para para crear sus funciones
'use strict'
// Method Builder
function MathModules (number = 0, number1 = 0 ){
    // Attributes
    this.number = number;
    this.number1 = number1;
}

// Methods
MathModules.prototype.suma = function(number , number1){
    let sum = number + number1;
    document.write("La Suma de "+number+" mas "+number1+" es : "+sum+"<br>");
}

MathModules.prototype.resta = function(number, number1){
    let rest = number - number1;
    document.write("La Resta de "+number+" menos "+number1+" es : "+rest+"<br>");
}

MathModules.prototype.multiplicacion = function(number, number1){
    let mult = number * number1;
    document.write("La Multiplicacion de "+number+" por "+number1+" es : "+mult+"<br>");
}

MathModules.prototype.division = function(number, number1){
    let divs = number / number1;
    document.write("La Division de "+number+" entre "+number1+" es : "+divs+"<br>");
}

let Number = parseInt(prompt("Digite un Numero : "));
let Number1 = parseInt(prompt("Digite otro Numero : "));

const Respuesta = new MathModules();
Respuesta.suma(Number, Number1);
Respuesta.resta(Number, Number1);
Respuesta.multiplicacion(Number, Number1);
Respuesta.division(Number, Number1);
