'use strict'

// Trabajando con las Clases CSS
window.addEventListener('load', ()=> {

    const $card = document.querySelector(".card");
    console.log($card);

    // ahora accedemos a la clase de nuestra estiqueta para manipular la clase que tenga nuestra estiqueta
    console.warn(`ahora accedemos a la clase de nuestra estiqueta para manipular la clase que tenga nuestra estiqueta`);
    console.log($card.className);

    // ahora traemos los datos de la clases pero en una lista
    console.warn(`ahora traemos los datos de la clases pero en una lista`);
    console.log($card.classList);

    // tambien podemos saber que clases tiene la etiqueta
    console.warn(`tambien podemos saber que clases tiene la etiqueta`);
    console.log($card.classList.contains("rotate-45"));

    // ahora agregamos una clase a la etiqueta
    console.warn(`ahora agregamos una clase a la etiqueta`);
    $card.classList.add("rotate-45");
    console.log($card.classList);
    console.log($card.className);

    // tambien podemos quitar las clases
    console.warn(`tambien podemos quitar las clases`);
    $card.classList.remove("rotate-45");
    console.log($card.classList);
    console.log($card.className);

    // usando el metodo toggle() podemos quitar o agregar clases dependiendo si esta existe o no!
    console.warn(`usando el metodo toggle() podemos quitar o agregar clases dependiendo si esta existe o no!`);
    
    // en este caso como tiene la clase se agrego
    console.warn(`en este caso como tiene la clase se agrego`);
    $card.classList.toggle("rotate-45");
    console.log(`se agrego rotate-45 =>`,$card.className);
    console.log($card.classList);

    // ahora si ejecutamos el mismo metodo toggle va a quitar la clase agregado siempre y cuando exista
    console.warn(`ahora si ejecutamos el mismo metodo toggle va a quitar la clase agregado siempre y cuando exista`);
    $card.classList.toggle("rotate-45");
    console.log(`se elimino rotate-45 =>`,$card.className);
    console.log($card.classList);

    // tambien podemos reemplazar un clase de la etiquetea html
    console.warn(`tambien podemos reemplazar un clase de la etiquetea html`);
    $card.classList.add("rotate-45");
    $card.classList.replace("rotate-45","rotate-135");
    console.log($card.className);
    console.log($card.classList);

    // tambien podemos agregar multiples clases
    console.warn(`tambien podemos agregar multiples clases`);
    $card.classList.add("opacity","sepia");
    console.log($card.className);
    console.log($card.classList);

    // tambien eliminar mulstiples elementos 
    console.warn(`tambien eliminar mulstiples elementos`);
    $card.classList.remove("opacity", "sepia", "rotate-135");
    console.log($card.className);
    console.log($card.classList);
});