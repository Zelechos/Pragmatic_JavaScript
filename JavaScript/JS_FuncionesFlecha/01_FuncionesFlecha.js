'use strict'
// callbacks

// Ejemplo 1

function welcome(callback){
    document.write("<h2>Funciones Flecha & Callbacks</h2>");
    document.write("<h3>Curso JavaScript</h3>");
    document.write("<blockquote>Y Falta Mucho Mas</blockquote>");
    callback();
}

welcome(function(){console.log("Fin de la Funcion Bienvenida . . . ")});

// Ejemplo 2
const hour = (message, callback) =>{
    console.log(`good ${message} `);
    callback(new Date());
}

hour("night", (date)=>{
    console.log(`the hour is : ${date.getHours()}:${date.getMinutes()}`);
});