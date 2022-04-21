// 1) Programa una Funcion que dado de Numeros retorne cual es el mayor

import { validateNumber } from './validations.js';

window.addEventListener('load', ()=> {
  'use strict';

  let number1 = parseInt(prompt("Enter a number : ", 0));
  let number2 = parseInt(prompt("Enter another number : ", 0));

  ((function(number1, number2){
    
    if (validateNumber(number1) && validateNumber(number2)){
      if (number1 < number2) {

        console.log("The largest number is : " + number2);
        alert("The largest number is : " + number2);
        document.write("The largest number is : " + number2);

      } else if (number2 < number1) {
      
        console.log("The largest number is : " + number1);
        alert("The largest number is : " + number1);
        document.write("The largest number is : " + number1);
      
      } else {
      
        console.log("The numbers entered are the same.");
        alert("The numbers entered are the same.");
        document.write("The numbers entered are the same.");
      
      } 

    } else {

      alert("Enter Numbers, No Symbols or Characters.");

    }

  })(number1, number2));
});