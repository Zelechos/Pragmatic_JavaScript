// 25) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
import { validateNumber } from "./validations.js";
'use strict'

const capicuaNumber = number =>
    (validateNumber(number))
    ? console.log(`number => ${number} \n is capicua ? => ${reverseNumber(number)}`)
    : console.warn(`wrong parameter => parameter{${typeof(number)}} \n was expected => parameter{number}`) 

const reverseNumber = number =>{
    let reverseNum = parseInt(String(number).split("").reverse().join(""));
    return (number === reverseNum);
}

// Testing
capicuaNumber(1234);
capicuaNumber(2002);
capicuaNumber('ether');
capicuaNumber(505);
capicuaNumber(154000451);
capicuaNumber('5005');
capicuaNumber([]);
capicuaNumber(false);
capicuaNumber();

