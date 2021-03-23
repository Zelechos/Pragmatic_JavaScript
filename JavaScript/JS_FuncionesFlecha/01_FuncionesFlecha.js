'use strict'

/* Ejemplo
function ShowAlert(){
    alert("Acaso me LLamaste");
}
button.addEventListener('Botoncito',ShowAlert);
*/

function Bienvenida(Callback){
    document.write("<h2>Funciones Flecha & Callbacks</h2>");
    document.write("<h3>Curso JavaScript</h3>");
    document.write("<blockquote>Y Falta Mucho Mas</blockquote>");
    Callback();
}

Bienvenida(function(){console.log("Fin de la Funcion Bienvenida . . . ")})