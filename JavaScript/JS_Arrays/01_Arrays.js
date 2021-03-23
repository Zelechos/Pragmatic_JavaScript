'use strict'

//Manera 1 de crear un Array

var peliculas = ['Dark', 'Rango','Ether'];

//Manera Numero 2 de Crear un Array

var Lenguajes = new Array('HTML', 'CSS', 'JavaScript' , 'Node Js' ,'React Js' , 'Git');

console.log(peliculas);
console.log(Lenguajes);


var indice = parseInt(prompt('Que Leguaje Quiere aprender : ',0));

if (indice >= Lenguajes.length){
    alert('El Elemento no Existe introduce un numero menor que '+Lenguajes.length);
}else{
    alert(Lenguajes[indice]);    
}

document.write("<h1>Esto es Lo que Hay que Aprender para Trabajar y Ganar Plata</h1>");
document.write("<ul>");
for(var I = 0 ; I < Lenguajes.length; I++ ){
        document.write("<li>"+Lenguajes[I]+"</li>");
    }
    document.write("</ul>");

/*--------------------------- BUCLE FOR EACH IMPORTANTISIMO-------------------*/

document.write("<h1 style='background:green;'>Esta Lista LLega Gracias A El BUCLE FOR EACH</h1>");

document.write("<ul>");
    Lenguajes.forEach(//Este forEach() trabaja con un Callback
        (Elemento , index , array)=>{
            console.log(array);
            document.write("<li style= background:red ;>"+index+"-"+Elemento+"</li>");
        }
    );
document.write("</ul>");

/*--------------------------- BUCLE FOR IN IMPORTANTISIMO-------------------*/

document.write("<h1 style='background:blue;'>Esta Lista LLega Gracias A El BUCLE FOR IN</h1>");
document.write("<ul>");
//en teoria la variable que declaramos en Leguajes en esta caso Lenguaje
//recorre desde 0 la longitud del array que le pongamos 
        for(let Lenguaje in Lenguajes){//Donde Lenguaje es el Indice
            document.write("<li style= background:gray ;>"+Lenguaje+"-"+Lenguajes[Lenguaje]+"</li>");
        }
document.write("</ul>");
