// 22) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
import validateString from './validations.js'
'use strict'

const palidromoText = data =>
    (validateString(data))
    ? console.log(`the word {${data}} is a palindrome => ${String(data) === String(data.split("").reverse().join(""))}`)
    : console.warn(`wrong parameter => parameter{${typeof(data)}} \n was expected => parameter{string}`) 

// Testing
let text = new String("solos");
palidromoText("salas");
palidromoText(text);
palidromoText(9);
palidromoText([]);
palidromoText("programmer");
palidromoText(false);
palidromoText("1001");
palidromoText();
