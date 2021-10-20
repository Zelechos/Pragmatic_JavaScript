// 28) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
import { validateNumber } from "./validations.js";
'use strict'

const numberPairOdd = number => 
    (validateNumber(number))
    ?(number % 2 == 0 ) 
        ? console.log(`the number ${number} is Pair!!`)
        : console.log(`the number ${number} is Odd!!`)
    : console.warn(`wrong parameter => parameter{${typeof(number)}} \n was expected => parameter{number}`);

// Testing
numberPairOdd(5);
numberPairOdd(-5);
numberPairOdd(6);
numberPairOdd(0);
numberPairOdd("45");
numberPairOdd(true);
numberPairOdd([]);
numberPairOdd();
numberPairOdd(123);

