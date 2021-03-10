'use strict'

//Metodos para Transformar TEXTO
var num = 99;
var text = "JavaScript me da de Comer";
var text2  ="  JAVA es mejor , pero quiero ser experto en JAVA  ";

var Dato = num.toString();//para converti cualquier dato a String
    Dato = text.toUpperCase();//par convertir el texto en mayusculas
    Dato = text.toLowerCase();//para converti en minusculas el texto
console.log("el dato es : "+Dato+"\nsu tipo de dato es : "+typeof(Dato));
console.log("ha sido tranformado correctamente. . .");

//Calcular la Longitud de un TEXTO

 console.log(text2.length);//Para contar cuantos caracteres tiene el TEXTO

//Concatenacion de texto ovbio

var TextRes = text.concat(text2);//claro que tambien podemos usar el simbolo mas pero con concat() se ve mas elegante
console.log(TextRes);

// Buscar una palabra especifica dentro de un TEXTO

var buscar = text2.indexOf("JAVA");//encuentra la primera palabra
    buscar = text2.lastIndexOf("JAVA");//Encutra la ultima palabra
    buscar  = text2.search("JAVA")//casi es lo mismo que indexof
    buscar = text2.match("JAVA");//TE DEVUELVE LA PALABRA DENTRO DE UN ARRAY EN EL INDICE 0
    buscar = text2.startsWith("JAVA");//para encontrar palabras al pricipio
    buscar = text2.endsWith("JAVA");//para encontrar palabras al final


    buscar = text2.replace("JAVA","Python");//para reemplazar una palabra seleccionada con otra
    buscar = text2.slice(16,21);//para eliminar el texto  del indice introducido
    buscar = text2.split(" ");//introducide el string en un array con " " separas todas las palabras y las pone en diferentes posiciones del array
    buscar = text2.trim();//quita los espacios de adelante y atras de el texto
    buscar = text2.substr(1,4);//Te saca la palabra que deseas de una string
    buscar = text2.includes("ser");//busca una palabra y si la encuentra te devuelve un valor Booleano true

    buscar = text2.match(/JAVA/g);//TE DEVUELVE TODAS LAS CONSIDENCIAS DE UN ARRAY EN UN VECTOR
    buscar = text2.charAt(1);//Para sacar la letras especificada por su posicion
    console.log(buscar);
