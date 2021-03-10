'use strict'

do{
   var Cantidad = Number(prompt("Cuantos numeros desea Introducir : ",0));
   var Suma = 0;
   var Promedio= 0;
   var Contador=0;

   if(isNaN(Cantidad)){

     console.log("Error de Conexion");
     alert("No introdujo un Numero Intentelo de nuevo.");

   }else{
     console.log("Conexion Exitosa");

     while(Contador < Cantidad){
       var Numero = Number(prompt("Digite un numero : ", 0));

       if(isNaN(Numero)){

         console.log("Error de Conexion");
         alert("No introdujo un Numero Intentelo de nuevo.");

       }else{

         Suma+=Numero;
         Contador++;
         console.log("Conexion Exitosa");
         console.log("Iteracion : "+Contador+" , NumeroIntroducido : "+Numero+" , Acumulacion Actual : "+Suma);

       }
   }
}
  Promedio = Suma/Cantidad;

}while(isNaN(Cantidad) || isNaN(Numero));

document.write("la Suma de todos los numeros que introdujo es : "+Suma+" y el Promedio : "+Promedio);
console.log("End of the Program");
