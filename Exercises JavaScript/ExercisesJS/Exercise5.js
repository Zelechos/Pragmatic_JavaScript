// 5) Realize una un programa que dado un funcion reconozca si el numero es par o impar ejemplo function(5) es impar
'use strict'

const pairOrOdd = Number => 
    (Number % 2 == 0)
        ? console.log(Number,' is Pair') 
        : console.log(Number,' is Odd');

//Testing
pairOrOdd(5);
pairOrOdd(50);
pairOrOdd(10);
pairOrOdd(9);