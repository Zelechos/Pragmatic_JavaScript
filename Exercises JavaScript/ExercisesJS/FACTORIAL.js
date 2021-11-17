// funcion que sirve para hallar el factorial de un numero
'use strict'

const factorial = number => (number== 0 || number ==1)? 1 : number * factorial(number-1);
export default factorial();