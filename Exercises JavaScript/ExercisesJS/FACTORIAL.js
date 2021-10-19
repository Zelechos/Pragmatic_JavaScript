'use strict'

// let Numero = parseInt(prompt("Digite un Numero Para Hayar Su Factorial : ",0));

export default function factorial(Numero){
  if(Numero== 0 || Numero ==1){
    // console.log(Numero);
    return 1;
  }
  return Numero * factorial(Numero-1);
}

// document.write("<h1> EL factorial es : "+factorial(Numero)+"</h1>");
//console.log("EL Factorial es : "+Factorial(Numero))
