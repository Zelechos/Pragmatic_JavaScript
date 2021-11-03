// 5) Realize una un programa que dado un funcion reconozca si el numero es par o impar ejemplo function(5) es impar
'use strict'

const Par_Impar = Number => 
    (Number % 2 == 0)
        ? console.log(Number,' es Par') 
        : console.log(Number,' es Impar');

//Testing
Par_Impar(5);
Par_Impar(50);
Par_Impar(10);
Par_Impar(9);