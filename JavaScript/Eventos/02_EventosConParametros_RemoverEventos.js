'use strict'


const eventMultiple = ()=>{
    alert("Mi manejador de eventos Multiples");
    console.log(event);
}

const greet = (name = "unknown")=>{
    alert(`Hello ${name}`);
}

const $button = document.getElementById('evento-multiple');

$button.addEventListener('click', eventMultiple);
$button.addEventListener('click', e => {    
    alert("Mi manejador de eventos Multiples otra vez!!!!");
    console.error(event);
    console.warn(e);
    console.log("tipo de evento => ", e.type);
    console.log("objeto que origina el evento => ", e.target);
});

// ------------------ Eventos con Parametros ------------------

// Para pasarle parametros a un eventro simplemente hacemos que nuestro manejador sea el arrow function con eso ya podemos llamar a las funciones que queramos en nuestro evento con parametros y sin parametros!!!
$button.addEventListener('click', ()=>{
    greet();
    greet("Ethernet");
    greet("Argus Aphocraphex");
});

// ------------------ Remover o Eliminar Eventos ------------------

const $buttonRemove = document.getElementById("remover-evento");

// Para remover un evento la funcion no tiene que ser un arrow function !!!!
// $buttonRemove.addEventListener('dblclick',(e)=>{
//     alert(`Removiendo el evento de tipo ${e.type}`);
//     console.log(e);
    
//     $buttonRemove.removeEventListener('dblclick');
// });


// En la mismas funcion expresada se esta removiendo el evento
const removeEvent = (e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $buttonRemove.removeEventListener('dblclick', removeEvent);
    $buttonRemove.disabled = true;
}

// Ahora si podemos remover porque la funcion manejadora es una funcion expresada
$buttonRemove.addEventListener("dblclick", removeEvent);


