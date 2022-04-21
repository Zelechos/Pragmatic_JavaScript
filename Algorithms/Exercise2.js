// 2) Programa una Funcion para sumr una amount de numbers indicado por teclado function(2) 5+5=10 y el average 10/2 = 5
'use strict'
let amount;
do{
  
  amount = Number(prompt("How many numbers do you want to enter? : ", 0));

  if(isNaN(amount)){
    console.error("Connection error...");
    alert("You did not enter a number. Try again.");
  }

  if(amount <= 0){
    console.error("Connection error...");
    alert("was expected 1 or greater than 1. Try again.");
  }

}while(isNaN(amount) || amount <= 0);

((function (amount){
  
  let average = 0;
  let sum = 0;
  let account = 0;

    console.warn("Connection successful");

    while(account < amount){
      let number = Number(prompt("enter a number : ", 0));

      if(isNaN(number)){

        console.error("Connection error...");
        alert("You did not enter a number. Try again.");

      } else {

        sum += number;
        console.warn("Connection successful");
        console.log("entered number : "+number+" , current accumulation : "+sum);

      }

      account++;
    }
    
  average = sum/amount;
  alert("the sum of all the numbers you entered is : "+sum+"\nand the average : "+average);
  console.log("end of the program");

})(amount));