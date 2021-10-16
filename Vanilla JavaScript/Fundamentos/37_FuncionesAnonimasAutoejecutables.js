// 'use strict'

// Funcion anonima autoejecutable

// ATENCION!!! : no se puede utilizar una funcion anonima autoejecutable si utilizamos la sentencia 'use strict' 
(function (message){
    console.log(message);
})("Hello Programmer!!!");

(function (d, w, c){
    c.log(d);
    c.log(w);
    c.log(c);

})(document, window, console);

// Exponente del Numero
let number = parseInt(prompt("Digite una Numero : "));
let number1 = parseInt(prompt("Digite el exponente del numero anterior : "));

(function (number, number1){
    let result = Math.pow(number, number1);
    console.log(result);
})(number, number1);

// DIFERENTES FORMAS DE ESCRIBIR UNA FAA(Funcion Anonimas Autoejecutable)

// Clasica
(function (text){
    console.log(text);
})("funcion anonima autoejecutable estilo Clasica ...");

// La Clockford
((function (text){
    console.log(text);
})("funcion anonima autoejecutable estilo ClockFord ..."));

// Unaria
+function(text){
    console.log(text);
}("funcion anonima autoejecutable estilo Unaria ...");

// Facebook
!function(text){
    console.log(text);
}("funcion anonima autoejecutable estilo Facebook ...");