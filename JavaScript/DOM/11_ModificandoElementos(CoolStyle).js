'use strict'

// ATENCION ESTO ES LO NUEVA MANERA DE MODIFICAR ELEMENTOS 
window.addEventListener('load', ()=> {

    // Debido al avance del Estandar de JS tenemos nuevos metodos para introducir elementos Dinamicamente estos son :
    /*
        .insertAdjacent ==> que traducido es insertar adyacente

        Tenemos 3 metodos mas usados los cuales son :
        
        .insertAdjacentElement(position, element); ==> que seria como el conocido appendChild(); , insertBefore();
        .insertAdjacentHTML(position, labelHTML); ==> que seria como el innerHTML
        .insertAdjacentText(position, text); ==> que seria como el textContent 

        Podemos notar que en todos estos metodos no solo nos pide los diferentes elementos que queremos introducir dinamicamente sino tambien nos pide como parametro una position el cual se explica acontinuacion.

        Posiciones:
        beforebegin(Hermano anterior);
        afterbegin(Primer hijo);
        beforeend(Ultimo hijo);
        afterend(Hermano siguiente);

        Listo mucha teoria ahora vamos a ver un ejemplo pratico!!!!
    */

    const $cards = document.querySelector(".cards");

    // Traemos el contenido de nuestro template HTML
    const $template = document.getElementById("template-card").content;
    console.log($template);

    // Creamos un fragmento
    const $fragment = document.createDocumentFragment();

    const $div = document.createElement("div");

    $template.querySelector("img").setAttribute("src", "https://placeimg.com/200/200/any");
    $template.querySelector("img").setAttribute("src", "https://placeimg.com/200/200/any");
    $template.querySelector("figcaption").textContent = "Any";

    let $clone = $template.cloneNode(true);
    console.log($clone);

    $fragment.appendChild($clone);
    $div.appendChild($fragment);


    $cards.insertAdjacentElement("afterbegin", $div);

    // otro ejemplo
    const $figure = document.createElement("figure");
    $figure.classList.add("card");
    // Creamos el contenido que le vamos a insertar
    let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;

    $figure.insertAdjacentHTML("beforeend", $contentCard);
    $figure.querySelector("figcaption").insertAdjacentText("afterbegin", "Any por insert");
    $cards.insertAdjacentElement("afterbegin", $figure);

    
    // Tambien podemos agregar con otros metodos que anteriormente estaban en Jquery los cuales son los siguientes : 

    // Agrega el elemento al como primer hijo
    $cards.prepend($figure);

     // Agrega el elemento al como ultimo hijo
    $cards.append($figure);
    
    // Agrega el elemento como hermano anterior
    $cards.before($figure);

    // Agrega el elemento como hermano posterior
    $cards.after($figure);


});
