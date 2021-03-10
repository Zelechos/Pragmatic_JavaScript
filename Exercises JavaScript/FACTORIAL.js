'use strict'

var Numero = parseInt(prompt("Digite un Numero Para Hayar Su Factorial : ",0));
function Factorial(Numero){
  if(Numero== 0 || Numero ==1){
    console.log(Numero);
    return 1;
  }
  console.log(Numero);
  return Numero * Factorial(Numero-1);
}

document.write("<h1> EL Factorial es : "+Factorial(Numero)+"</h1>");
//console.log("EL Factorial es : "+Factorial(Numero))
