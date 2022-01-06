'use strict'

// ESTILOS Y VARIABLES CSS
window.addEventListener('load', ()=> {

    const $link = document.querySelector('.link-dom');

    // -------------- Estilos CSS -------------------------

    // podemos llamarlo con la notacion del punto atributo style
    console.log($link.style);

    // o tambien podemos usar getAttribute(); NO RECOMENDABLE EN ESTE CADO EN PARTICULAR
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
    
});
