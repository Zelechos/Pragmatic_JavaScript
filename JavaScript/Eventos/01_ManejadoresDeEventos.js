'use strict';

//----------------- Manejador de un Evento con atributo en html (NO Recomendable) -----------------
const hello = ()=>{
    alert('esto es una mala practica no se recomienda');
    console.log(event);
}

//----------------- Manejador de Evento Semantico-----------------
const good = ()=>{
    alert("interesante!!! evento semantico");
    console.log(event);
}

const $button = document.getElementById("evento-semantico");

// Esta es una de las maneras en que podemos definir nuestro Evento Semantico
$button.onclick = good;

// Otra manera seria esta
$button.onclick = e =>{
    alert("interesante!!! manejador de evento semantico");
    console.warn(e);
    console.log(event);
}

//----------------- Manejador de Evento Multiple (El mas usado) -----------------
const eventMultiple = ()=>{
    alert("Mi manejador de eventos Multiples");
    console.log(event);
}

const $buttonFirst = document.getElementById("evento-multiple");


// Esta es un a manera de crear nuestro evento
$buttonFirst.addEventListener("click", eventMultiple);

// Otra manera seria esta
$buttonFirst.addEventListener("click", e =>{
    alert("Mi manejador de eventos Multiples otra vez!!!!");
    console.error(event);
    console.warn(e);
    console.log("tipo de evento => ", e.type);
    console.log("objeto que origina el evento => ", e.target);
});





