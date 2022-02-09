'use strict'

// La Delegacion de Eventos es muy importante y optimiza mucho a nivel de recursos de memoria las aplicaciones javascript
/*
Definicion : Delegación de eventos es un mecanismo a través del cual evitamos asignar event listeners a múltiples nodos específicos del DOM, asignando un event listener a solo un nodo padre que contiene el resto de estos nodos.
*/

function flujoEvents (e){
    console.log(`Hello greets you ${this} the click originated it ${e.target.className}`);
}

// Aqui le creamos un evento directo al document con esto no requerimos detener ninguna propagacion
document.addEventListener("click", (e)=>{
    console.log("Click desde", e.target);

    // NOTA: dado que el evento matches() busca las coincidencias en nuestro document no necesitamos crear mas variables

    // ahora vamos a buscar el elemento desde el cual sucedio el evento
    if(e.target.matches(".tres a")){
        // si es el enlace simplemente le quitamos la accion de ir a la url
        console.warn(`Se quito la accion de ir a otro url`);
        e.preventDefault();
    }

    // Tambien podemos hacer esto en los divs
    if(e.target.matches(".eventos-flujo div")){
        flujoEvents(e);
    }


});


// $divs.forEach(div => {
//     div.addEventListener("click", flujoEvents);
// });