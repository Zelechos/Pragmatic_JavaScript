// 4) Programa una Funcion que introduzca un limite inferior y un limite superior devuelva una sucesion de numeros impares ejemplo function(1,10) => 1,3,5,7,9
'use strict'

const sequenceNumbersPairs = (LimiteInferior, LimiteSuperior) =>{
  if (isNaN(LimiteInferior) || isNaN(LimiteSuperior)) {
    console.error("No introdujo Numero porfa Hagalo");
  }else{
    let odds = [];
    for (let number = LimiteInferior; number <= LimiteSuperior ; number++) {
      if(number % 2 != 0){
        odds.push(number);
      }
    }
    console.log(odds);
  }
}

// Testing
sequenceNumbersPairs(1,10);
sequenceNumbersPairs(1,100);
sequenceNumbersPairs(1,20);
sequenceNumbersPairs(1,30);

