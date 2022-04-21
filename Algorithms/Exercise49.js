// 49) Crear una funcion que sirve para hallar el factorial de un numero

const factorial = (number = 0) => (number === 0 || number === 1)? 1 : number * factorial(number - 1);
