// 19) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
import validateString, { validateNumber } from "./Exercise20.js"
'use strict'

const textRepeater = (data , repeater) =>
    (validateString(data) && validateNumber(repeater))
        ? console.log(data.repeat(repeater))
        : console.warn(`wrong parameters => parameter{${typeof(data)}} , parameter1{${typeof(repeater)}},\n was expected => parameter{string} , parameter1{number}`);    
    
// Testing
textRepeater("Hello world ", 5);
textRepeater("ether", 5);
textRepeater("w", 3);
textRepeater("Alex", 10);
textRepeater([], 5);
textRepeater({}, 5);
textRepeater();
textRepeater("hello pragmatic");
textRepeater([],34);
textRepeater("pragmatic coder",{});
textRepeater(false,true);
textRepeater(false,5);
