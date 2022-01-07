'use strict'

// Metodos Par Manipular Strings

//transformacion de Textos

let num =999;
let texto="Voy por ti Node Js y tambien React Js";
let texto1="Voy por ti Git & Github";


console.log('es un numero; '+num);
console.log('es un texto; '+num.toString());

let dato = texto.toUpperCase();//para convertir texto en mayusculas
    dato = texto1.toLowerCase();//para convertir texto en minusculas
console.log(texto);
console.log(dato);

//metodo para Calcular la Logitud de un texto
let nombre = 'Etherias';
    nombre = [9 ,90];
console.log(nombre.length);//para saber la logitud de un texto

//Concatenar lo que viene siendo unir texto
//let Textototal = texto+' '+texto1;
let Textototal = texto.concat(' '+texto1); //para concatenar
console.log(Textototal);

//-------------------------------------PARTE 2----------------------------------
let busqueda = texto.indexOf("Node");//identifica desde que caracter esta la palabra
    busqueda = texto.lastIndexOf("Js");//identifica la ultima concidencia de la palabra introducida
    busqueda = texto.search("Js");//busca la posicion inicial de la palabra muy similar a indexOf()
    busqueda = texto.match("Js");//te devuelve un array con todo los datos del texto
    busqueda = texto.match(/Js/gi);//te devuelve todas las concidencias que encuentra del texto en un array
    busqueda = texto.substr(14,5 );//para substraer segun la posicion y cantida de letras del texto
    busqueda = texto.charAt(16);//par sacar uan letra del indice indicado
    busqueda = texto.startsWith("V");//busca al principio del texto una palabra
    busqueda = texto.endsWith("s");//busca al final del texto una palabra
    busqueda = texto.includes("React");//busca en todo el texto una palabra
    console.log(busqueda);
//-------------------------------------PARTE 3----------------------------------
let busqueda2 = texto.replace(" y " ," & "); //para reemplazar texto
busqueda2 = texto.slice(3);//para cortar texto desde la posicion indicada
busqueda2 = texto.split();//te mete todo el texto en una posicion de un array
busqueda2 = texto.split(" ");//te mete cada palabra de el texto en una posicion de un array
busqueda2 = texto.trim();//quita los espacios que tenga el texto

console.log(busqueda2);
