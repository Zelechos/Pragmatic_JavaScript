//3) Programa una Funcion que introduzca un limite inferior y un limite superior rellene con numeros la sucesion ejemplo function(2,10) => 2,3,4,5,6,7,8,9,10
((function (){
    let LimiteInferior = parseInt(prompt("Digite Limite Inferior de los numeros que se mostraran : ",0));
    let LimiteSuperior = parseInt(prompt("Digite Limite Superior de los numeros que se mostraran : ",0));

    if(isNaN(LimiteInferior) || isNaN(LimiteSuperior)){
      console.error(`was expected numbers not => ${typeof LimiteInferior} and ${typeof LimiteSuperior}`);
    }else{
      let numbers = [];
      for(let index = LimiteInferior; index <= LimiteSuperior; index++){
        numbers.push(index);
      }
      console.log(numbers);
    }
})());