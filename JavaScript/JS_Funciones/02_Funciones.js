'use strict'

//Parametros REST

function LenguajesProgramacion(Lenguaje1 , Lenguaje2 , ...Mas_Lenguajes){
    console.log("Leguaje 1 : ",Lenguaje1);
    console.log("Leguaje 2 : ",Lenguaje2);
    console.log(Mas_Lenguajes);
}
console.log("Parametros REST");
LenguajesProgramacion("JavaScript" , "TypeScript", "Python" , "Java", "Go");

//Parametros SPREAD
let Lenguajes = ['C++','C','Scala','R'];
console.log("Parametros SPREAD");
LenguajesProgramacion(...Lenguajes,"JavaScript" , "TypeScript", "Python" , "Java", "Go");
