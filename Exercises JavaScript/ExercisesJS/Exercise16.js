// 16) Programa una función que cuente el número de caracteres de una cadena de texto, testeando el tipo de dato recibido pe. miFuncion("Hola Mundo") devolverá 10.

import validateString from "./Exercise20.js";
'use strict'

const numberCharacters = data =>
    (validateString(data))
        ?console.log(`el numero de caracteres de "${ data }" es : ${data.length}`)
        :console.warn(`wrong parameter => parameter{${typeof(data)}} ,\n was expected => parameter{string}`)

// Testing
let text = new String("hola estoy programando en JS");
numberCharacters("ether");
numberCharacters(text);
numberCharacters([4,5.1]);
numberCharacters({});
numberCharacters(87);
numberCharacters('s');
numberCharacters("hola soy programador");
numberCharacters();
