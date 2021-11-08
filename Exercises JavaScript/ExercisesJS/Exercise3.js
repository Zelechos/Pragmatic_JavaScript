//3) Programa una Funcion que introduzca un limite inferior y un limite superior rellene con numeros la sucesion ejemplo function(2,10) => 2,3,4,5,6,7,8,9,10

const generatorNumbers = (lowerLimit, upperLimit)=>{
  let numbers = [];
  for(let index = lowerLimit; index <= upperLimit; index++){
    numbers.push(index);
  }
  return numbers;
}

((function (){
    let lowerLimit = parseInt(prompt("Enter Lower Limit of the numbers to be displayed : ",0));
    let upperLimit = parseInt(prompt("Enter Upper Limit of the numbers to be displayed : ",0));

    (!(isNaN(lowerLimit)) || !(isNaN(upperLimit)))
      ? (lowerLimit !== upperLimit)
        ? console.log(generatorNumbers(lowerLimit, upperLimit))
        : console.error(`the limits cannot be equals!!`)
      : console.error(`was expected numbers not => ${typeof lowerLimit} and ${typeof upperLimit}`)
})());

