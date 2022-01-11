'use strict'

// ESTILOS Y VARIABLES CSS
window.addEventListener('load', ()=> {

    const $link = document.querySelector('.link-dom');

    // -------------- Estilos CSS -------------------------

    // podemos llamarlo con la notacion del punto atributo style
    console.log($link.style);

    // o tambien podemos usar getAttribute(); NO RECOMENDABLE EN ESTE CASO EN PARTICULAR
    console.log($link.getAttribute("style"));
    
    // podemos mostrar los estilos que tiene nuestro atributo de la siguiente manera
    console.log($link.style.color);

    // accedemos a los estilos computados del navegador
    console.warn(`accedemos a los estilos computados del navegador`);
    console.log(window.getComputedStyle($link));

    // otra manera de mostrar los estilos de mi atributo style NO RECOMENDABLE
    console.log(getComputedStyle($link).getPropertyValue("color"));

    // ahora vamos a manipular los estilos 
    $link.style.setProperty("background-color", "#008F4C");
    $link.style.setProperty("text-decoration", "none");

    // aqui sobre escribimos un propiedad css
    $link.style.setProperty("color", "white");

    // tambien podemos usar la notacion del punto
    $link.style.width = "150px";
    $link.style.textAlign = "center";
    $link.style.marginLeft = "auto";
    $link.style.marginRight = "auto";
    $link.style.padding = "1rem";
    $link.style.borderRadius = "5rem";
    $link.style.setProperty("font-size", "25px");

    console.log($link.style);

    // -------------- Variables CSS - Custom Properties CSS -------------------------

    const $html = document.documentElement;
    const $body = document.body;

    //  traemos las variables CSS
    let darkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let greenColor = getComputedStyle($html).getPropertyValue("--green-color");

    console.warn(`Mostramos las variables css traidas desde el HTML `);
    console.log(darkColor);
    console.log(greenColor);

    $body.style.backgroundColor = darkColor;


    // ahora cambiaremos de color a las cards 
    const $cards = document.querySelectorAll(".card");
    const $textCards = document.querySelectorAll(".card figcaption");

    console.log($cards);

    $cards.forEach(card => {
        card.style.setProperty("background-color", greenColor);
    });

    $textCards.forEach(text => {
        text.style.fontSize = "25px";
    });


    // tambien podemos cambiar el color de la lista
    const $list = document.querySelectorAll("#menu ul li a");
    console.log($list);

    $list.forEach(link => {
        // Primero usamos el metodo setProperty()
        link.style.setProperty("text-decoration", "none");
        link.style.setProperty("color", greenColor);

        // ahora tambien podemos usar la notacion del punto es lo mismo
        link.style.fontSize = "20px";
    });

});
