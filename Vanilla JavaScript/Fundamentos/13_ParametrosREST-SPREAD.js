'use strict'

//Parametro REST ---> ...RestoDeFrutas
function frutas(fruta1,fruta2,...RestoDeFrutas){
  console.log("Fruta 1 :"+fruta1);
  console.log("Fruta 2 :"+fruta2);
  console.log(RestoDeFrutas);
}

frutas("pomelos","duraznos","naranaja","limon","uva","pera");

//Parametro SPREAD ---> frutas( {...cajonFrutas} ,"pomelos","durznos","naranaja","limon","uva","pera");
let cajonFrutas = ["bananas","Manzanas","aguacate"];
frutas(...cajonFrutas,"pomelos","durznos","naranaja","limon","uva","pera");


//Parametro REST ---> Suma de Numeros
console.log("---------------------------------------------");
function Suma(Number1 , Number2 , ...Numbers){
  let Suma = Number1 + Number2;

  Numbers.forEach(Element=>{
    Suma += Element;
  });

  return Suma;
}

const Numbers = [100, 100, 100, 500];
let Resultado = Suma(10, 9, ...Numbers);
console.log(Resultado);


//Parametro SPREAD ---> Resta de Numeros
// ATENCION!!!! : Sirve tambien para meter como parametros un vector
function Resta(Number3 , ...Numbers){
  Resultado -= Number3;

  Numbers.forEach(Elements=>{
    Resultado -= Elements;
  });

  return Resultado;
}

const Numbers1 = [10, 20, 130 , 59];
Resultado = Resta(100 , ...Numbers1);
console.log(Resultado);


//Parametro SPREAD ---> Mezclando Arreglos

const Arr1 = [1, 2, 3, 4, 5] , Arr2 = [6, 7, 8, 9, 10];

// Aqui se aprecia que solo se muestran como arrays dentro de una array 
const Arr3 = [Arr1 , Arr2];
console.log(Arr3);

console.log("----------- Aplicando Parametros SPREAD ---------------------");
// Aqui aplicamos los valores de Parametros SPREAD para mezclar los arrays en uno solo
// TAMBIEN conocido como operador de Propagacion
const Arr4 = [...Arr1 , ...Arr2];
console.log(Arr4);






