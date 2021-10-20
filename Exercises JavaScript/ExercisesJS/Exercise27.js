// 27) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
import { validateNumber } from "./validations.js";
'use strict'

const primeNumber = number =>
    (validateNumber(number))
    ? (number > 1)
        ? console.log(`the number ${number}  => ${validatePrime(number)}`)
        : console.error(`negative numbers and { 0 , 1 } are not accepted!!!`)
    : console.warn(`wrong parameter => parameter{${typeof(number)}} \n was expected => parameter{number}`);
    

const validatePrime = number =>{
    let validate = false;
    for (let index = 2; index < number; index++) {
        if ( (number % index) === 0){
            validate = true;
            break;
        }
    }
    return (validate) ? "no es primo" : "es primo" ;
}

// Testing
primeNumber(6);
primeNumber("9");
primeNumber(7);
primeNumber();
primeNumber(-7);
primeNumber([]);
primeNumber({});
primeNumber(false);
primeNumber(0);
primeNumber(1);


