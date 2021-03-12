'use strict'
//Variables let and Var

//Prueba con Var
let Numero = 40;
console.log(Numero);//40
if(true){
  Numero = 50;
  console.log(Numero);//50
}
console.log(Numero);//50

//Prueba con Let
let Texto = "Sigmundus Esct";
console.log(Texto);
//afuera de la condicional es Texto = Sigmundus Esct
if(true){
  let Texto = "Find the Argus Aphocraphex";
  console.log(Texto);
}
console.log(Texto);
