// 2) Programa una Funcion para sumar una cantidad de numeros indicado por teclado function(2) 5+5=10 y el promedio 10/2 = 5
'use strict'
let Cantidad = Number(prompt("Cuantos numeros desea Introducir : ", 0));

((function (Cantidad){

  let Promedio = 0;
  let Suma = 0;
  let Contador = 0;

  if(isNaN(Cantidad)){

    console.log("Error de Conexion");
    alert("No introdujo un Numero Intentelo de nuevo.");

  }else{
    console.log("Conexion Exitosa");

    while(Contador < Cantidad){
      let Numero = Number(prompt("Digite un numero : ", 0));

      if(isNaN(Numero)){
        console.log("Error de Conexion");
        alert("No introdujo un Numero Intentelo de nuevo.");
      } else {
        Suma+=Numero;
        console.warn("Conexion Exitosa");
        console.log("NumeroIntroducido : "+Numero+" , Acumulacion Actual : "+Suma);
      }
      Contador++;
    }
  }
Promedio = Suma/Cantidad;

alert("la Suma de todos los numeros que introdujo es : "+Suma+"\ny el Promedio : "+Promedio);
console.log("End of the Program");

})(Cantidad));