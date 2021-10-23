// 31) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
import { validateNumber } from "./validations.js"
'use strict'

const  finalAmount = (amount, discount)=>
    (validateNumber(amount) && validateNumber(discount))
    ? console.log(`final amount => ${amount - (amount*discount)/100}`)
    : console.warn(`wrong parameters => parameter{${typeof(amount)}} , parameter1{${typeof(discount)}} \n was expected => parameter{number} ,parameter1{number}`); 

// Testing
finalAmount(1000,20);
finalAmount(1000,50);
finalAmount(517,32);
finalAmount(517,0);
finalAmount(0,0);
finalAmount([],32);
finalAmount("517");
finalAmount();
finalAmount("4646",798);
finalAmount(517,false);