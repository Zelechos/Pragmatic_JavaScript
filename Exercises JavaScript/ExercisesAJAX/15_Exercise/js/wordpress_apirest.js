'use strict'
const d = document;
const $site = d.getElementById('site');
const $posts = d.getElementById('posts');
const $loader = d.querySelector('.loader');
const $template = d.getElementById('post-template').content;
const $fragment = d.createDocumentFragment();

// Estandares de rutas para usar los diferentes endpoints
const DOMAIN = "https://css-tricks.com";
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
// le pasamos un atributo embed para que podeamos acceder a los contenido embebidos que hay en el json de respuesta de los post!!! importante
const POSTS = `${API_WP}/posts?_embed`;
const PAGES = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;

// subrutina para traer los datos del sitio
function getSiteData(){
    fetch(SITE)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json => {
            console.log(json)
            $site.innerHTML = `
                <h3>Sitio Web</h3>
                <h2>
                    <a href="${json.url}" target="_blank">${json.name}</a>
                </h2>
                <p>${json.description}</p>
                <p>${json.timezone_string}</p>
            `
        })
        .catch(error => {
            console.error(error)
            let message = error.statusText || "Ocurrio un error";
            $site.innerHTML = `<h3> Error ${error.status}: ${message} </h3>`;
        })
}

// subrutina para traer la informacion de los posts
function getPosts(){
    $loader.style.display = "block";
    fetch(POSTS)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        console.log(json)
        json.forEach(post =>{
            
            let categories = "", tags ="";

            post._embedded["wp:term"][0].forEach(post => categories += `<li>${post.name}</li>`);
            post._embedded["wp:term"][1].forEach(post => tags += `<li>${post.name}</li>`);

            $template.querySelector('.post-image').src = post._embedded["wp:featuredmedia"][0].source_url || "";
            $template.querySelector('.post-image').alt = post.title.rendered;
            $template.querySelector('.post-title').textContent = post.title.rendered;
            $template.querySelector('.post-author').innerHTML = `
                <img src="${post._embedded.author[0].avatar_urls["48"]}" alt="${post._embedded.author[0].name}">
                <figcaption>${post._embedded.author[0].name}</figcaption>
            `;
            $template.querySelector('.post-date').innerHTML = new Date(post.date).toLocaleDateString();;
            $template.querySelector('.post-link').href = post.link;
            $template.querySelector('.post-excerpt').innerHTML = post.excerpt.rendered.replace("[&hellip;]","....");
            $template.querySelector('.post-categories').innerHTML = `
            <p>Categorias</p>
            <ul>${categories}</ul>`;
            $template.querySelector('.post-tags').innerHTML = `
            <p>Tags</p>
            <ul>${tags}</ul>`;

            $template.querySelector('.post-content > article').innerHTML = post.content.rendered;


            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);

        });
        $posts.appendChild($fragment);
        $loader.style.display = "none";
    })
    .catch(error => {
        console.error(error);
        let message = error.statusText || "Ocurrio un error";
        $posts.innerHTML = `<h3> Error ${error.status}: ${message} </h3>`;
        $loader.style.display = "none";
    })
}


// Evento para ejecutar ambas funciones cuando la web termine de cargar
d.addEventListener('DOMContentLoaded', e=>{
    getSiteData();
    getPosts();
    console.warn("Code Love");
})

