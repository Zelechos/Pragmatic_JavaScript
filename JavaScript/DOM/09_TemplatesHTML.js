'use strict'

// Templates HTML MUY IMPORTANTE!!!!!
window.addEventListener('load', ()=> {

    const $cards = document.querySelector(".cards");
    // Traemos nuestro template creado en el archivo HTML
    // como tal no nos interesa el elemento template si no el contenido de nuestro template 
    const $template = document.getElementById("template-card").content;
    console.log($template);
    // Luego creamos un fragment 
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

    cardContent.forEach(data =>{

        // Aqui es donde empezamos a meterle los datos a nuestr template
        $template.querySelector("img").setAttribute("src", data.img);
        $template.querySelector("img").setAttribute("alt", data.title);
        $template.querySelector("figcaption").textContent = data.title;

        // Creamos un clone dado que el template solo sirve como unico luego cambia su informacion para siempre entonces en base a esto clonamos el contenido del nuestro template en ese momento y todo  sucontenido
        let $clone = document.importNode($template, true);
        console.log($clone);

        // Entonces luego agregamos el clone a mi fragmento 
        $fragment.appendChild($clone);

    });

    $cards.appendChild($fragment);

});
