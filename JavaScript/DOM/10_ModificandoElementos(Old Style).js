'use strict'

// ATENCION TODO EL CONTENIDO DE ESTE SCRIPT ES UN EJEMPLO DE COMO SE HACIA ANTES LA MODIFICACION DE ELEMENTOS OJO ESO NO SIGNIFICA QUE NO SE PUEDA USAR O QUE SEA MALA PRACTICA USAR DICHOS METODOS.

window.addEventListener('load', ()=> {
    
    const $cards = document.querySelector(".cards");

    const $template = document.getElementById("template-card").content;
    console.log($template);

    const $fragment = document.createDocumentFragment();

    const cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Personas",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        }
    ];

    // cardContent.forEach( data => {
    //     $template.querySelector("img").setAttribute("src", data.img);
    //     $template.querySelector("img").setAttribute("alt", data.title);
    //     $template.querySelector("figcaption").textContent = data.title;
        
    //     // Creamos el Clone
    //     const $clone = document.importNode($template, true);

    //     $fragment.appendChild($clone);

    // });

    $template.querySelector("img").setAttribute("src", "https://placeimg.com/200/200/any");
    $template.querySelector("img").setAttribute("alt", "Ha Sido Reemplazado");
    $template.querySelector("figcaption").textContent = "Lo que sea";

    // Creamos un clone
    const $clone = document.importNode($template, true);

    $fragment.appendChild($clone);


    // --------------- OTROS METODOS PARA AGREGAR LOS ELEMENTOS DINAMICOS -----------------------
    // Usamos el metodo replaceChild() para reemplazar un valor de un etiquetas HTML
    console.warn("Usamos el metodo replaceChild() para reemplazar el elemento dinamico HTML");
    // $cards.replaceChild($fragment, $cards.children[3]);

    // Tambien podemos usar insertar el elemento antes de otro elemento para eso usamos el metodo insertBefore();
    console.warn("Tambien podemos usar insertar el elemento antes de otro elemento para eso usamos el metodo insertBefore();");
    // $cards.insertBefore($fragment, $cards.firstElementChild);
    // $cards.insertBefore($fragment, $cards.children[1]);

    // Tambien podemos eliminar los elementos hijos de una etiqueta con el metodo removeChild();
    console.warn("Tambien podemos eliminar los elementos hijos de una etiqueta con el metodo removeChild();");
    // $cards.removeChild($cards.lastElementChild);
    // $cards.removeChild($cards.children[0]);


    // Tambien hay otra manera aparte del metodo importNode(); para crear clones de elementos HTML otro metodo que podemos usar es el cloneNode();
    console.warn("Tambien hay otra manera aparte del metodo importNode(); para crear clones de elementos HTML otro metodo que podemos usar es el cloneNode();");
    const $clone1 = $cards.cloneNode(true);

    // ahora simplemente lo insertamos a nuestro body 
    document.body.appendChild($clone1);



});
