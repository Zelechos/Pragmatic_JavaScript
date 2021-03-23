'use strict'

//Funciones Anonimas SON FUNCIONES SIN NOMBRE
var Nombre = prompt("Digite el Nombre de la Pelicula:");
var Pelicula = function(Nombre){
    return "La pelicula es : "+Nombre;
}

document.write(Pelicula(Nombre));


//CALLBACKS

function Sumame(Number1,Number2,Mostrar,PorDOS,Pensamiento,MostrandoPensameinto){
        var Suma =  Number1() + Number2();
        MostrandoPensameinto(Pensamiento());
        Mostrar(Suma);
        PorDOS(Suma);
    return Suma;
}

/*
Estos son los CALLBACKS Funciones Declaradas Adentro de una 
Invocacion de Otra Funcion , funcionan en si como parametros de la 
Funcion ha Invocar
*/
Sumame(
    function(){
        var Number1 = parseInt(prompt("Digite Otro Numero :",0));
        return Number1;
    }

    ,function(){
        var Number2 = parseInt(prompt("Digite Otro Numero :",0));
        return Number2;
    }

    ,function(Dato){
        console.log("La Suma es : "+Dato);
    }

    ,function(Dato){
        console.log("La Suma por 2 es : "+Dato*2);
    }

    ,function(){
        var Pensamiento = String(prompt("Escribe Un Pensamiento De Tu Autoria : "));
        return Pensamiento;
    }

    ,function(Pensamiento){
        document.write("<br>"+Pensamiento);
        console.log(Pensamiento);
    }
    );
