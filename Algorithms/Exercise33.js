// 33) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
import validateString from './validations.js';
'use strict'

const counterVowel = word =>
    (validateString(word))
        ? objectInfo(word)
        : console.warn(`wrong parameter => parameter{${typeof(date)}} \n was expected => parameter{string}`); 

const vowels = word => (new RegExp(/[aeiouáéíóú]/gi).test(word)) ? word.match(/[aeiouáéíóú]/gi).length : 0;

const consonants = word => (new RegExp(/[bcdfghjklmnñpqrstvwxyz]/gi).test(word)) ? word.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length : 0;

const objectInfo = word => console.log({word, vowels: vowels(word), consonants: consonants(word)});
    

// Testing
let word = "hola soy un string que quiero saber cuantas vocales tengo";
counterVowel("ñpño");
counterVowel("hOlA tIh");
counterVowel(word);
counterVowel([]);
counterVowel({});
counterVowel();
counterVowel(90);
counterVowel("https");
counterVowel(false);


