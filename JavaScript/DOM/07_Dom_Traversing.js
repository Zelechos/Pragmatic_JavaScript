'use strict'

window.addEventListener('load', ()=> {

    const $cards = document.querySelector(".cards");
    console.log($cards);

    console.warn("ahora podemos accerder a sus hijo con el metodo children");
    console.log($cards.children);

    console.warn("tambien podemos ser mas rigurosos y obtener no solo los nodos de tipo elemento HTML si no tambien todos los otros nodos que existen de hijos de nuetra etiqueta");
    console.log($cards.childNodes);

    console.warn("tambien podemos acceder a un hijo especifico del padre con children[numero del hijo al que queremos acceder]");
    console.log($cards.children[2]);

    console.warn("ahora vamos a obtener el padre de nuestro elemento seleccionado con el metodo parentElement es para elementos en el DOM (RECOMENDABLE)");
    console.log($cards.parentElement);

    console.warn("tambien podemos usar otro metodo para obtener el padre con parentNode");
    console.log($cards.parentNode);

    console.warn("tambien podemos hacer referencia al primer hijo de nuestro elemento en este caso es el salto de linea");
    console.log($cards.firstChild);

    console.warn("tambien se puede hacer referencia al ultimo hijo de nuestro elemento en este case otro salto de linea");
    console.log($cards.lastChild);

    console.warn("podemos obtener el primero elemento HTML con firstElementChild");
    console.log($cards.firstElementChild);

    console.warn("tambien podemos obtener el ultimo elemento HIJO usando el metodo lastElementChild");
    console.log($cards.lastElementChild);

    console.warn("podemos hacer referencia tambien a los elemento hermano de tipos nodo que esta antes de nuestro elemento");
    console.log($cards.previousSibling);

    console.warn("tambien podemos hacer referencia al elemento hermano que esta despues de nuestro elemento ");
    console.log($cards.nextSibling);

    console.warn("podemos hacer referencia tambien a los elementos hermanos en este caso para la etiqueta hermana");
    console.log($cards.previousElementSibling);

    console.warn("tambien podemos hacer referencia a la etiqueta hermana que esta despues de nuestro elemento");
    console.log($cards.nextElementSibling);

    console.warn("tambien podemo buscar los ancestros de nuestro elemento haber si tiene dichos padres con el metodo closest()");
    console.log($cards.closest("div"));
    console.log($cards.closest("fieldset"));
    console.log($cards.closest("body"));
    console.log($cards.children[3].closest("section"));
    
});
