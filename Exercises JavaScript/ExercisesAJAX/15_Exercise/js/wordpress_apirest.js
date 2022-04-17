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
const POSTS = `${API_WP}/posts`;
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
    fetch(POSTS)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        console.log(json)
        
        $loader.style.display = "none";
    })
    .catch(error => {
        console.error(error)
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

