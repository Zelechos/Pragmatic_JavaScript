'use strict'

window.addEventListener('load', ()=>{

    //------------------- Creando elementos -------------------

    // Para practicar crearemos una tarjeta = card
    const $figure = document.createElement("figure");
    const $img = document.createElement("img");
    const $figcaption = document.createElement("figcaption");
    const $figcaptionText = document.createTextNode("Tech");
    const $cards = document.querySelector(".cards");
    $img.setAttribute("src", "https://placeimg.com/200/201/tech")
    $img.setAttribute("alt", "Tech");
    $figure.appendChild($img);
    $figcaption.appendChild($figcaptionText);
    $figure.appendChild($figcaption);
    $figure.classList.add("card");
    $cards.appendChild($figure);
    console.log($cards);
    console.log($figure);
    console.log($img);
    console.log($figcaption);

    // Otra manera de crear una tarjeta mas simple pero menos rigurosa
    const $figure2 = document.createElement("figure");
    $figure2.innerHTML = `
        <img src="https://placeimg.com/200/220/people" alt="People">
        <figcaption>People</figcaption>
    `;
    $figure2.classList.add("card");
    $cards.appendChild($figure2);

    console.warn("---------------- Creando nuestra Lista Desordenada Dinamicamente de Estaciones ----------------------");
    // ahora vamos a craer dinamicamento una lista desordenada y introducirla en la web
    const seasons = ["Spring", "Summer", "Fall", "Winter"];
    const $ul = document.createElement("ul");

    const $h3 = document.createElement("h3");
    $h3.textContent = "Seasons";
    document.body.appendChild($h3);
    document.body.appendChild($ul);

    // llenamos nuestra lista desordenada
    seasons.forEach( season => {
        // creamos los elementos
        const $li = document.createElement("li");
        const $aText = document.createTextNode(season);
        const $a = document.createElement("a");
        $a.setAttribute("href", season+".html");
        $a.setAttribute("target", "_blank");
        
        // empezamo a crear nuestra estructura html
        $a.appendChild($aText);
        $li.appendChild($a);
        $ul.appendChild($li);
    });
    
    console.warn($ul);

    console.warn("---------------- Creando nuestra Lista Desordenada Dinamicamente de Continentes ----------------------");
    // ahora vamos a craer dinamicamento una lista desordenada y introducirla en la web
    const continents = ["Africa", "America", "Europa", "Asia", "Oceania"];
    const $ul2 = document.createElement("ul");
    const $h3_2 = document.createElement("h3");
    $h3_2.textContent = "Continents";

    document.body.appendChild($h3_2);
    document.body.appendChild($ul2);

    $ul2.innerHTML = "";
    continents.forEach(continent => $ul2.innerHTML += `<li><a href="${continent}.html" target="_blank">${continent}</a></li>`)
    
    console.warn($ul2);

/* 
    NOTA : llenar elementos y etiquetas de HTML usando el DOM de esta manera como hemos estado viendo 
    en los ejemplos no es optimo ni eficiente dado que a la hora de llenar registros y datos al DOM
    consume muchos recursos y computo de los navegadores que quieran abrir nuestra web para solucionar esto 
    existen los fragmentos los cuales no consumen muchos recursos y son mas eficientes a la hora de trabajar 
    con el DOM.
*/

    //------------------- FRAGMENTOS -------------------
    const months = ["January","February", "March", "April", "May", "June", "August", "September", "October", "November", "December"];

    const $h3_3 = document.createElement("h3");
    const $ul3 = document.createElement("ul");
    $h3_3.textContent = "Months of the year";
    document.body.appendChild($h3_3);
    // Creamos nuestro fragmento
    const $fragment = document.createDocumentFragment();
    
    months.forEach(month=>{
        const $li = document.createElement("li");
        $li.textContent = month;
        $fragment.appendChild($li);
    });

    $ul3.appendChild($fragment);
    document.body.appendChild($ul3);

    // NOTA : ES MUY IMPORTANTE TENER EN CUENTA QUE AL USAR FRAGMENTOS ESTAMOS MEJORANDO EL RENDIMIENTO PARA LLAMAR Y MOSTRAR GRANDES CANTIDADES DE DATOS EN EL DOM!!!!!



});