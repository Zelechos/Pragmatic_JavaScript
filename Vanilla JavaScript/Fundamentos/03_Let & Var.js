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

console.log("\n***************Var&Let*****************\n");
//Usar let no var
let Saludo = "Empezando aprender JavaScript";


var saludo = "hola estoy manchando tu ventana";
console.log(Saludo);

/*
    el objeto window mapea toda la ventana del navegador   
    Objeto : window
    Es el objeto principal en la jerarquía y contiene 
    las propiedades y métodos para controlar la ventana del navegador. 
    De él dependen todos los demás objetos de la jerarquía
*/
console.log(window);
console.log(window.saludo);
console.log(window.Saludo);

console.log("***********************************************************");
console.log("VAR");
console.log("");

/*como se ve en la salida de la console la 
    variable cambia dentro del bloque y afuera
    del bloque tambien desde el momento que cambia 
    la variable fuera o dentro de un bloque conservar
    ese valor
*/
var Genero = "Rock";
console.log("La Musica que te gusta es ", Genero);

{
    var Genero = "Reguetton";
    console.log("La Musica que te gusta es ", Genero);
}

console.log("La Musica que te gusta hoy es",Genero);

console.log("***********************************************************");
console.log("LET");

/*como se ve en la console la variable tipo let
si cambia depenediendo el bloque y cuando no esta fuera
de ese bloque el valor se conserva igual que antes 
y no se ve en el objeto window dejando limpio el objeto
window y es muy buena practica de programacion
*/ 


let genero = "Rock";
console.log("La Musica que te gusta es ", genero);

{
    let genero = "Reguetton";
    console.log("La Musica que te gusta es ", genero);
}

console.log("La Musica que te gusta hoy es",genero);

