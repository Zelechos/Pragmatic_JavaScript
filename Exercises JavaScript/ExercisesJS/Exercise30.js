// 30) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
import validateString, { validateNumber } from './validations.js';
'use strict'

const binaryConverter = (number, base) =>
    (validateNumber(number) && validateNumber(base))
    ? (base === 2)
        ? console.log(`response binary ${number} to decimal => ${binary(number, base)}`)
        : (base === 10) 
            ? console.log(`response decimal ${number} to binary => ${decimal(number, base)}`)
            : console.error(`wrong base => ${base} was expected => {2},{10}`)
    : console.warn(`wrong parameters => parameter{${typeof(binary)}} , parameter1{${typeof(decimal)}} \n was expected => parameter{string} ,parameter1{number}`); 

const binary = (number , base)=> parseInt(number , base);
const decimal = (number, base)=> number.toString(base-8);

// Testing
binaryConverter(100,2);
binaryConverter(555,10);
binaryConverter(4,10);
binaryConverter(77777,10);
binaryConverter(10101010,2);
binaryConverter("s;dfkljas;d",40);
binaryConverter();
binaryConverter(555555,90);
binaryConverter("1100","100");
binaryConverter(true);
binaryConverter([],{});


// --------------- Codigo Ineficiente pero interesante ---------------------
const binaryToDecimal = binary => {
    let digits = binary.split("");// 100 => [1,0,0]
    let response = 0, position = 0;
        for (let index = digits.length; index >= 0; index--) {
            if(digits[index] === "0"){
                position += 1;
            }
            
            if(digits[index] === "1"){
                response += Math.pow(2,position);
                position += 1;
            }
        }
    return response;
}

const validateDigits = binary =>{
    let digits = binary.split("");// 100 => [1,0,0]
    for (let index = 0; index < digits.length; index++) {
        if(digits[index] !== "0" && digits[index] !== "1" ){
            return true;
        }
    }
    return false;
}

const decimalToBinary = decimal => (decimal >>> 0).toString(2);

