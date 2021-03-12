'use strict'

//Funcion anonimas es una funcion que no tiene nombre

let pelicula = function(nombre){
  return "La pelicula es :"+ nombre;
}

//CallBacks

function Sumar(number1, number2 , Datos , MostrarSuma , SumaporDos){
  let suma = number1+number2;

  //aqui le pasamos el parametro a nuestras funcuiones
  Datos(number1,number2);
  MostrarSuma(suma);
  SumaporDos(suma);

  return suma;
}

//al insertar parametrao le inserta funciones nuevamente a nuestra funcion
Sumar(Number(prompt("Digite un Numero : ",0)),
Number(prompt("Digite otro Numero : ",0)),
(number1,number2) => {//Funcion flecha con parentesis ya que tiene mas de una parametro sin la palabra function es lo mismo q
  console.log("Los numeros que se estan sumando son : "+number1+" y "+number2);
},
dato=>{
  console.log("La suma es : "+dato);
},
dato =>{//Funcions Flecah sin paraentesis ni la palabra function es lo mismo q
  console.log("La suma multiplicada por Dos es : "+(dato*2));
});
