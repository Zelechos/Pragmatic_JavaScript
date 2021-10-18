// 17) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
import validateString , { validateNumber } from "./validations.js";


'use strict'
const chainCutter = (data, cutter) =>
(validateString(data) && validateNumber(cutter))
    ? (cutter <= data.length)
        ? (cutter > 0)
            ? console.log(data.substring(0, cutter))
            : console.warn(`El cortador no puede ser negativo`)
        : console.warn(`El cortador de cadena tiene que ser menor o igual [${data.length}]`)
    : console.warn(`wrong parameters => parameter{${typeof(data)}} , parameter1{${typeof(cutter)}} ,\n was expected => parameter{string} , parameter1 {number}`);

// Testing
chainCutter("hello i am hacker", 5);
chainCutter("hola", 5);
chainCutter({}, 3);
chainCutter("Hola Mundo", 4);
chainCutter();
chainCutter("",9);
chainCutter("ether");
chainCutter("hacking . . ." , []);
chainCutter([],-9);
chainCutter("pragmatic",-9);
