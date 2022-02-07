'use strict'
// En base a un div cards llenar este div con tarjetas giratorias aplicando templates HTML , fragments, clones

// Traemos el div cards
const $cards = document.querySelector('.cards');
console.log($cards);

const $template = document.getElementById("template-card").content;
console.log($template);

const $fragment = document.createDocumentFragment();

// Contenido que guardaremos en las tarjetas
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
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    }
];

// Guardamos esto en una variable dado que se repite
const $divChild = $template.querySelector("div");


cardContent.forEach(data =>{
    $divChild.firstElementChild.querySelector("img").setAttribute("src",data.img);
    $divChild.lastElementChild.querySelector("img").setAttribute("src",data.img);

    $divChild.firstElementChild.querySelector("h2").textContent = data.title;
    $divChild.lastElementChild.querySelector("h2").textContent = data.title;

    $template.appendChild($divChild);

    const $clone = document.importNode($template, true);
    
    $fragment.appendChild($clone);
    console.log($fragment);
});

$cards.appendChild($fragment);


