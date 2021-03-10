'use strict'


do{
var LimiteInferior = parseInt(prompt("Digite Limite Inferior de los numeros que se mostraran : ",0));
var LimiteSuperior = parseInt(prompt("Digite Limite Superior de los numeros que se mostraran : ",0));

if(isNaN(LimiteInferior) || isNaN(LimiteSuperior)){
  alert("Digite Numeros Porfa");
}else{
  document.write("<h1 align = center><strong><em>Los numeros de "+LimiteInferior+" hasta "+LimiteSuperior+" son :</em></strong></h1><br>");
  for(var i = LimiteInferior; i <= LimiteSuperior;i++){
  document.write("["+i+"]");
}
}
}while(isNaN(LimiteInferior) || isNaN(LimiteSuperior));
