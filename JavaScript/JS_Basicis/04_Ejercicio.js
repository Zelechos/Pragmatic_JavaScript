'use strict'
do{
    var Number1 = parseInt(prompt('Digite el Primer Numero : ',0));
    var Number2 = parseInt(prompt('Digite el Segundo Numero : ',0));

    if(isNaN(Number1) || isNaN(Number2)){
        alert("No Introdujo un Numero en Cualquiera de las Dos Oportunidades para Hacerlo : ");
    }else{
        var Suma = Number1 + Number2;
        var Resta = Number1 - Number2;
        var Multiplicacion = Number1 * Number2;
        var Division = Number1 / Number2;

        document.write("<h1>Las Respuestas de Las Operaciones son :</h1>");
        
        var Respuesta ="La Suma es: "+(Suma)+"<br>"+
                        "La Resta es: "+(Resta)+"<br>"+
                        "La Multiplicacion es: "+(Multiplicacion)+"<br>"+
                        "La Division es: "+(Division)+"<br>";

        var Respuesta1 ="La Suma es: "+(Suma)+"\n"+
                        "La Resta es: "+(Resta)+"\n"+
                        "La Multiplicacion es: "+(Multiplicacion)+"\n"+
                        "La Division es: "+(Division)+"\n";
        document.write(Respuesta);
        console.log(Respuesta1);
        alert(Respuesta1);
    }



}while(isNaN(Number1) || isNaN(Number2));

