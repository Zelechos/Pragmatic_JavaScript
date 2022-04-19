'use strict';

export function PostCart(props){
    // Destructuramos props esto es algo que se hace muy a menudo en react js
    let {date, title, _embedded, slug, id} = props;
    let dateFormat = new Date(date).toLocaleString();
    let imageVerify = _embedded["wp:featuredmedia"][0].source_url ||"./app/assets/img/favicon.jpg";

    // Aplicamos delegacion de eventos para que no nos genere error en caso que algun elemento no este cargado
    document.addEventListener('click', e=>{
        if(!e.target.matches(".post-card a"))return false;
        localStorage.setItem('wpPostId', e.target.dataset.id);
    });
    
    return `
        <article class="post-card">
            <img src="${imageVerify}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${dateFormat}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>
        </article>
    `;
}   