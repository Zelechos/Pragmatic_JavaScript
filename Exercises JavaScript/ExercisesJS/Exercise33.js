// 33) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
import validateString from './validations.js';
'use strict'

const counterVowel = word =>
    (validateString(word))
        ? console.log(` the vowels in the word are => ${vowels(word)}`)
        : console.warn(`wrong parameter => parameter{${typeof(date)}} \n was expected => parameter{string}`); 

const vowels = word => (new RegExp(/[aeiou]/gi).test(word)) ? word.match(/[aeiou]/gi).length : 0;
        
// Testing
let word = "hola soy un string que quiero saber cuantas vocales tengo";
counterVowel("hola tih");
counterVowel(word);
counterVowel([]);
counterVowel({});
counterVowel();
counterVowel(90);
counterVowel("https");
counterVowel(false);


