// 20) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
import validateString from './validations.js';
'use strict'

const reverseText = data => 
    (validateString(data))
    ? console.log(data.split("").reverse().join(""))
    : console.warn(`wrong parameter => parameter{${typeof(data)}} \n was expected => parameter{string}`);

// Testing
let text = new String("hello world");
reverseText("ether");
reverseText(text);
reverseText([]);
reverseText();
reverseText(true);
reverseText(4);