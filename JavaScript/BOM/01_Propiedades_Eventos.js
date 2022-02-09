'use strict'

// ------------------------ WINDOW PROPIEDADES ------------------------

// Hace referencia al tamaño del ancho de nuestro viewport 
console.log(`Ancho de nuestra ventana => ${window.innerWidth}`);

// Hace referencia al tamaño del alto de nuestro viewport 
console.log(`Alto de nuestra ventana => ${window.innerHeight}`);

// Hace referencia al tamaño del ancho de nuestro navegador
console.log(`Ancho de nuestro navegador => ${window.outerWidth}`);

// Hace referencia al tamaño del alto de nuestro navegador
console.log(`Alto de nuestro navegador => ${window.outerHeight}`);

// Hace referencia a la distancia que se aleja del top el scroll
console.log(`La Distancia del scroll hacia arriba => ${window.scrollY}`);

// Hace referencia a la distancia que se aleja del left el scroll
console.log(`La Distancia del scroll hacia la izquierda => ${window.scrollX}`);

// Hace referencia a las coordeanada X de la pantalla en donde esta el navegador
console.log(`La coordenada X en la que esta el navegador => ${window.screenX}`);

// Hace referencia a las coordeanada Y de la pantalla en donde esta el navegador
console.log(`La coordenada Y en la que esta el navegador => ${window.screenY}`);




// ------------------------ EVENTOS CON WINDOW ------------------------


// Aqui creamos un evento para afectar al window para obtener datos del tamaño de nuestra web en tiempo real
window.addEventListener('resize', e =>{
    console.clear();
    console.log(`----------- Event resize -----------`);
    console.log(`Ancho de nuestra ventana => ${window.innerWidth}`);
    console.log(`Alto de nuestra ventana => ${window.innerHeight}`);
    console.log(`Ancho de nuestro navegador => ${window.outerWidth}`);
    console.log(`Alto de nuestro navegador => ${window.outerHeight}`);
    console.log(`La Distancia del scroll hacia arriba => ${window.scrollY}`);
    console.log(`La Distancia del scroll hacia la izquierda => ${window.scrollX}`);
    console.warn(e);
});

// Aqui creamos un evento para afectar el scroll
window.addEventListener('scroll', e =>{
    console.clear();
    console.log(`----------- Event scroll -----------`);
    console.log(`La Distancia del scroll hacia arriba => ${window.scrollY}`);
    console.log(`La Distancia del scroll hacia la izquierda => ${window.scrollX}`);
    console.warn(e);
});

// NO ES UNA BUENA PRACTICAR TRABAJAR CON ESTE EVENTO DE load
// Aqui creamos un evento para cuando la ventana del navegador termine de cargar
window.addEventListener('load', e =>{
    const $subtitle = document.querySelector('.subtitle');
    $subtitle.style.width = "2000px";
    $subtitle.style.height = "2000px";

    console.clear();
    console.log(`----------- Event load -----------`);
    console.log(`Una vez terminada la carga no muestra la coordenada X donde esta el navegador => ${window.screenX}`);
    console.log(`Una vez terminada la carga no muestra la coordenada Y donde esta el navegador => ${window.screenY}`);
    console.warn(e);
});

// ATENCION!!! ES UN MEJOR PRACTICA Y MAS EFICIENTE TRABAJAR CON EL DOMContentLoaded!!!
// este evento del document funciona de manera similar que el evento "load" del window
document.addEventListener('DOMContentLoaded', e =>{
    console.clear();
    console.log(`----------- Event DOMContentLoaded -----------`);
    console.log(`Una vez terminada la carga no muestra la coordenada X donde esta el navegador => ${window.screenX}`);
    console.log(`Una vez terminada la carga no muestra la coordenada Y donde esta el navegador => ${window.screenY}`);
    console.warn(e);
});













// ----- EJEMPLOS SIMILARES QUE TENEMOS EN JQUERY -----
// $(window).load(()=>{});
// $(window).ready(()=>{});
// $(window).on("load", ()=>{});

