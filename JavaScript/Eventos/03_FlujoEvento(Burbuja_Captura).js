'use strict'

/*
El Flujo de eventos se refiere cuando un eventos se origina tiene una propagacion a lo 
largo del arbol del DOM por defecto esa propagacion se va dando del elemento mas interno
al elemento mas externo del DOM en este caso seria el document y a esto se le conoce como 
        ---------------------------FASE DE BURBUJA---------------------------
*/

const $divs = document.querySelectorAll(".eventos-flujo div");
console.log($divs);

function flujoEvents (e){
    console.log(`Hello greets you ${this.className} the click originated it ${e.target.className}`);
}

// Recorremos nuestro nodeList
// aqui como podemos ver le asignamos nuestro evento a los 3 divs esto hace dado que son el mismo eventos se activen los 3 al mismo tiempo 
$divs.forEach(div => {
    // FASE DE BURBUJA
    // Si ponemos a false el tercer parametro del evento significa que estamos en fase burbuja
    // div.addEventListener("click", flujoEvents, false);
    // div.addEventListener("click", flujoEvents);

    // FASE DE CAPTURA (ES MAS OPTIMA POR QUE NO TE CONSUME TANTA MEMORIA)
    // Pero si le ponemos true significa que estamos en fase captura la cual es cuando la propagacion se va dando del elemento mas externo al mas interno en este caso mi evento actual
    // div.addEventListener("click", flujoEvents, true);


    // Como tercer parametro tambien podemos mandar un objeto
    div.addEventListener("click", flujoEvents, {
        capture: true, //Parametro capture sirve para elegir la fase de propagacion que tendra el evento
        once: true, //Parametro once si esta en true significa que tu evento solo se va a activar un vez!!
    });
});

/*
    NOTA : esta fase de captura y burbuja la podemos omitir si se delegan los eventos a un elemento padre mas externo y esto tambien ayuda a mejorar el rendimiento de la memoria y es mas optimo a esto se le conoce como DELEGACION DE EVENTOS!!!
*/