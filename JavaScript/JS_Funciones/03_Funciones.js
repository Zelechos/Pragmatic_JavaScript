'use strict'

//Funciones Anonimas SON FUNCIONES SIN NOMBRE
let Nombre = prompt("Digite el Nombre de la Pelicula:");
let Pelicula = function(Nombre){
    return "La pelicula es : "+Nombre;
}

document.write(Pelicula(Nombre));


//CALLBACKS

function Sumame(Number1,Number2,Mostrar,PorDOS,Pensamiento,MostrandoPensameinto){
        let Suma =  Number1() + Number2();
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
        let Number1 = parseInt(prompt("Digite Otro Numero :",0));
        return Number1;
    }

    ,function(){
        let Number2 = parseInt(prompt("Digite Otro Numero :",0));
        return Number2;
    }

    ,function(Dato){
        console.log("La Suma es : "+Dato);
    }

    ,function(Dato){
        console.log("La Suma por 2 es : "+Dato*2);
    }

    ,function(){
        let Pensamiento = String(prompt("Escribe Un Pensamiento De Tu Autoria : "));
        return Pensamiento;
    }

    ,function(Pensamiento){
        document.write("<br>"+Pensamiento);
        console.log(Pensamiento);
    }
    );
