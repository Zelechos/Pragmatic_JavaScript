'use strict'

window.addEventListener('load', ()=> {
    
    const $whatIsDom = document.getElementById("what-is");
    
    let text = `
    <p>
    El modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML & XML.
    </p>
    
    <p>
    Este Provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>
    El DOM no es parte de la especificacion de Javascript, es una API para los navegadores
    </mark>
    </p>
    
    `;
    
    // Maneras de agregar contenido textual a un elemento

    // no recomendable!!! NO FORMA PARTE DEL ESTANDAR
    $whatIsDom.innerText = text;

    // no recomendable!!! PERO ESTE SI FORMA PARTE DEL ESTANDAR 
    // es conveniente usar el metodo textContent(); para los chats
    $whatIsDom.textContent = text;

    // RECOMENDABLE PARA USAR PORQUE TOMA EN CUENTA LAS ESTIQUETAS HTML
    $whatIsDom.innerHTML = text;

    // El metodo outerHTML reemplaza la etiqueta con el texto que le introducimos
    $whatIsDom.outerHTML = text;
    
});

