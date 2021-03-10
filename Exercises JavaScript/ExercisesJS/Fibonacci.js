'use strict'

var Numero = Number(prompt("Digite la posicion que quiere ver de la Sucesion de Fibonacci : ",0));

function Fibonacci(Numero){

    if(Numero == 0){
      return 0;
    }else if(Numero == 1 || Numero == 2){
      return 1;
    }else{
      return Fibonacci(Numero-1) + Fibonacci(Numero-2);
    }
}

document.write("<h3>El numero Fibonacci es : "+Fibonacci(Numero)+"</h3>");



// Numero=5
//                     Fibonacci(4)               +            Fibonacci(3)
//          Fibonacci(3)     +      Fibonacci(2)  + Fibonacci(2)     +      Fibonacci(1)
//Fibonacci(2) + Fibonacci(1)+    1   +  1   +   1
//    1         +    1      +            3
//   5
