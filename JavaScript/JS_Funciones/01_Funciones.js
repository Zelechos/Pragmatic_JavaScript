'use strict'


    function Verificacion(Mostrar = false){
        if (Mostrar == false){
            alert("Adios no te mostrare nada");
        }else{
            do{
                var Number1 = parseInt(prompt("Digite Un Numero :",0));
                var Number2 = parseInt(prompt("Digite Otro Numero :",0));
                    if (isNaN(Number1) || isNaN(Number2)){
                        alert("No Introdujo Numeros Por Favor hagalo . . .");
                    }
            }while(isNaN(Number1) || isNaN(Number2));
                    Calculadora(Number1 , Number2);
        }            
    }
//Funciones 
    function Calculadora(Number1,Number2){
        do{
            var Opcion = Menu();
            Buscador(Opcion, Number1,Number2);   
        }while(Opcion != 5);
    }

    function Menu(){
        var Opcion = parseInt(prompt("******Menu******\n"+
                "1. Sumar\n"+
                "2. Restar\n"+
                "3. Multiplicar\n"+
                "4. Dividir\n"+
                "5. Salir\n"+
                "Elige Opcion :"));
        return Opcion;                
    }

    function Buscador(Opcion,Number1,Number2){
        switch(Opcion){
            case 1 : 
            console.log("La Suma es : "+Sumar(Number1,Number2));
            break;
            case 2 : 
            console.log("La Resta es : "+Restar(Number1,Number2));
            break;
            case 3 : 
            console.log("La Multiplicacion es : "+Multiplicar(Number1,Number2));
            break;
            case 4 : 
            console.log("La Division es : "+Dividir(Number1,Number2));
            break;
            case 5 :
            console.log("Fin del Programa  . . . ");
            break;
            default:
            console.log("La Opcion que Introdujo no Existe . . .");
            break;
        }
    }

    function Sumar(Number1,Number2){
        return Number1+Number2;
    }

    function Restar(Number1,Number2){
        return Number1-Number2;
    }

    function Multiplicar(Number1,Number2){
        return Number1*Number2;
    }

    function Dividir(Number1,Number2){
        return Number1/Number2;
    }

    function Validacion(){
    var Decision = String(prompt("Digite Elija Una Opcion (True = T/t) o (False = F/f) :"));
        switch(Decision){
            case 'T' :
                Verificacion(true);
            break;
            case 't' :
                Verificacion(true);
            break;
            case 'F' :
                Verificacion(false);
            break;
            case 'f' :
                Verificacion(false);
            break;
            default:
                alert("ERROR Opcion Erronea");
            break;
        }
    }

Validacion();


function Mensaje(){
    document.write("Mensaje Enviado <br>");
    document.write("Hola, soy una IA y tu? <br>");
}

//Invocar o llamar a la calculadora
Mensaje();



