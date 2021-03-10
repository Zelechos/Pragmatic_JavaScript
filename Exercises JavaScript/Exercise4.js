'use strict'

do{
var LimiteInferior = parseInt(prompt("Introduzca Su Limite Inferior",0));
var LimiteSuperior = parseInt(prompt("Introduzca Su Limite Superior",0));
if (isNaN(LimiteInferior) || isNaN(LimiteSuperior)) {
  alert("No introdujo Numero porfa Hagalo");
}else{
  for (var Numero = LimiteInferior; Numero <= LimiteSuperior ; Numero++) {
    if(Numero%2 != 0){
      console.log(Numero);
      document.write("<strong>["+Numero+"]</strong>");
    }
  }
}
}while(isNaN(LimiteInferior) || isNaN(LimiteSuperior));
