// crear una funcion para sumar, restar, multiplicacion, division que calcule en base dos numero introducidos
window.addEventListener('load', ()=> {

    'use strict'
    ((function(){
        document.getElementById('body').innerHTML = '';

        do{
            let number1 = parseInt(prompt('Digite el Primer Numero : ',0));
            let number2 = parseInt(prompt('Digite el Segundo Numero : ',0));
            
            if(isNaN(number1) || isNaN(number2)){
                alert("No Introdujo un Numero en Cualquiera de las Dos Oportunidades para Hacerlo : ");
            }else{
                let suma = number1 + number2;
                let resta = number1 - number2;
                let multiplicacion = number1 * number2;
                let division = number1 / number2;
                
                document.write("<h1>Las respuestas de Las Operaciones son :</h1>");
                
                let respuesta ="La suma es: "+(suma)+"<br>"+
                "La resta es: "+(resta)+"<br>"+
                "La multiplicacion es: "+(multiplicacion)+"<br>"+
                "La division es: "+(division)+"<br>";
                
                let respuesta1 ="La suma es: "+(suma)+"\n"+
                "La resta es: "+(resta)+"\n"+
                "La multiplicacion es: "+(multiplicacion)+"\n"+
                "La division es: "+(division)+"\n";
                document.write(respuesta);
                console.log(respuesta1);
                alert(respuesta1);
            }
        }while(isNaN(number1) || isNaN(number2));
        
    })());
});