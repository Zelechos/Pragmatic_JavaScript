'use strict';

const d = document;

const $main = d.querySelector('main');

// Aqui traemos nuestro archivo markdown con una peticion local por fetch
fetch("./liars/main.md")
    .then(response => response.ok ? response.text() : Promise.reject(response))
    .then(liar => {
        // Creamos un converter para converitr de .md a .html
        let converter = new showdown.Converter();
        // Convertimos nuestro .md a .html
        let codeHtml = converter.makeHtml(liar);
        $main.innerHTML = codeHtml;
        // otra manera de resumir todo lo anterior seria : 
        // $main.innerHTML = new showdown.Converter().makeHtml(liar);
    })
    .catch(error =>{
        let message = error.statusText || "Ocurrio un error";
        $main.innerHTML = `<h2>Error ${error.status} : ${message}<h2>`;
    })
    .finally(console.warn(`Liar ready`));

