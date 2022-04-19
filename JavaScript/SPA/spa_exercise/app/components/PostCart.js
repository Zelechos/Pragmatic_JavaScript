'use strict';

export function PostCart(props){
    // Destructuramos props esto es algo que se hace muy a menudo en react js
    let {date, title, _embedded, slug} = props;
    let dateFormat = new Date(date).toLocaleString();
    let imageVerify = _embedded["wp:featuredmedia"][0].source_url ||"./app/assets/img/favicon.jpg";
    
    return `
        <article class="post-card">
            <img src="${imageVerify}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${dateFormat}">${dateFormat}</time>
                <a href="#/${slug}">Ver Publicacion</a>
            </p>
        </article>
    `;
}   