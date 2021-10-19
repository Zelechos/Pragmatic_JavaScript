// 26) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
import factorial from './factorial.js';
import { validateNumber } from './validations.js';

'use strict'
const calculateFactorial = number =>
    (validateNumber(number))
    ? (number >= 0)
        ?console.log(`the factorial of ${number} \n is => ${factorial(number)}`)
        :console.error(`negative numbers are not accepted!!!`)
    : console.warn(`wrong parameter => parameter{${typeof(number)}} \n was expected => parameter{number}`);

// Testing
calculateFactorial(9);
calculateFactorial(0);
calculateFactorial(1);
calculateFactorial(5);
calculateFactorial([]);
calculateFactorial({});
calculateFactorial();
calculateFactorial(true);
calculateFactorial("80");
calculateFactorial(-5);
calculateFactorial(-50);

