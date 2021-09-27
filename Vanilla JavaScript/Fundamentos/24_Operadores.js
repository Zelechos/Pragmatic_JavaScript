'use strict'
// Operadores Aritmeticos

let Number = 5 + (5 - 10) * 3;
console.log(Number);

let Residuo = 5%2;
console.log(Residuo);

// Operadores Relacionales
console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 <= 9);
console.log(8 == 9);
console.log(8 === 9);
console.log(8 != 9);
console.log(8 !== 9);

/*
    = un igual es una asignacion de variable 
    == dos iguales es la comparacion de los dos valores
    === tres iguales es la comparion del tipo de dato y de los valores para ver si son iguales 
*/
console.log("Comparado con solo dos iguales \n", 8 == "8");
console.log("Comparado con tres iguales \n", 8 === "8");

// Operadores de Incremento y Decremento 

let Num = 1;
Num += 8;
console.log(Num);
Num *= 10;
console.log(Num);
Num-=100;
console.log(Num);

// Operadores Unarios
let Incremento = 1;
Incremento++;
Incremento--;
Incremento++;
Incremento--;
console.log(Incremento);


// Operadores Logicos
/*
    ! Not
    || Or
    && And
*/
console.log(!true);
console.log(!false);

console.log(8 === 9 && 4 < 5);

console.log(8 === 9 || 4 < 5);









