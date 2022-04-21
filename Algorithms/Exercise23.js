// 23) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
import validateString from "./validations.js";
'use strict'

const destroyPattern = (data, pattern) =>
    (validateString(data) && validateString(pattern))
    ? console.log(`with pattern => ${data} \n without pattern => ${data.replace(new RegExp(pattern,"ig"),"")}`)
    : console.warn(`wrong parameters => parameter{${typeof(data)}} parameter1{${typeof(pattern)}} \n was expected => parameter{string} parameter1{string}`) 

// Testing
destroyPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
destroyPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy");
destroyPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]");
destroyPattern("https://www.ether.com , https://www.zelechos.com , https://www.aphocraphex.com", "https://www.");
destroyPattern("https://www.ether.com , https://www.zelechos.com , https://www.aphocraphex.com", "https://");
destroyPattern([],"x");
destroyPattern("hola como estas que tienes",true);
destroyPattern("hola como estas que tienes",9);
destroyPattern();
destroyPattern([]);
destroyPattern(true);
destroyPattern(9);
destroyPattern("Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta commodi alias adipisci, animi ab modi necessitatibus est consectetur cupiditate veniam. Eligendi nesciunt corrupti tempora dolor. In incidunt quam maxime.", "o");
destroyPattern("Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta commodi alias adipisci, animi ab modi necessitatibus est consectetur cupiditate veniam. Eligendi nesciunt corrupti tempora dolor. In incidunt quam maxime.", "[m,n,i]");