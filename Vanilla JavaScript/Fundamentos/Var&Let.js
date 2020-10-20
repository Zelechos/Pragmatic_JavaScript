'use strict'

console.log("\n***************Var&Let*****************\n");
//Usar let no var
let Saludo = "joder de nuevo empezando JavaScript";


var saludo = "hola estoy manchando tu ventana";
console.log(Saludo);

//el objeto window mapea toda la ventana del navegador 
console.log(window);
console.log(window.saludo);
console.log(window.Saludo);

console.log("***********************************************************");
console.log("VAR");


/*como se ve en la salida de la console la 
    variable cambia dentro del bloque y afuera
    del bloque tambien desde el momento que cambia 
    la variable fuera o dentro de un bloque conservar
    ese valor
*/
var Genero = "Rock";
console.log("La Musica que te gusta es ", Genero);

{
    var Genero = "Reguetton";
    console.log("La Musica que te gusta es ", Genero);
}

console.log("La Musica que te gusta hoy es",Genero);

console.log("***********************************************************");
console.log("LET");

/*como se ve en la console la variable tipo let
si cambia depenediendo el bloque y cuando no esta fuera
de ese bloque el valor se conserva igual que antes 
y no se ve en el objeto window dejando limpio el objeto
window y es muy buena practica de programacion
*/ 


let genero = "Rock";
console.log("La Musica que te gusta es ", genero);

{
    let genero = "Reguetton";
    console.log("La Musica que te gusta es ", genero);
}

console.log("La Musica que te gusta hoy es",genero);

