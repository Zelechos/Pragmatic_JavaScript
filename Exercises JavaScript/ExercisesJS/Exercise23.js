// 23) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
import validateString from "./validations.js";
'use strict'

const destroyPattern = (data, pattern) =>
    (validateString(data) && validateString(pattern))
    ? console.log(`with pattern => ${data} \n without pattern => ${finderPattern(data, pattern)}`)
    : console.warn(`wrong parameters => parameter{${typeof(data)}} parameter1{${typeof(pattern)}} \n was expected => parameter{string} parameter1{string}`) 

const finderPattern = (data, pattern) => {
    let database = data.split(" "), datafinal = [];
    for (let index = 0; index < database.length; index++) {
        (database[index].includes(pattern))
        ? datafinal[index] = database[index].replace(pattern,"")
        : datafinal[index] = database[index];
    }
    return String(datafinal.join(" "));
}

// Testing
destroyPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
destroyPattern("https://www.ether.com , https://www.zelechos.com , https://www.aphocraphex.com", "https://www.");
destroyPattern([],"x");
destroyPattern("hola como estas que tienes",true);
destroyPattern("hola como estas que tienes",9);
destroyPattern();
destroyPattern([]);
destroyPattern(true);
destroyPattern(9);