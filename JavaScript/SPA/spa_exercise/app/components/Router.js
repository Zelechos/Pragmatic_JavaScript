'use strict';

import API from '../helpers/wordprees_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCart } from './PostCart.js';

export function Router(){
    const d = document;
    const w = window;
    const $posts = d.getElementById('posts');

    // usamos destructuracion para obtener el hash del navegador
    let { hash } = location;

    console.log(hash);

    $posts.innerHTML = null;

    // Carga de contenido en base al hash
    if(!hash || hash === "#/" ){
        $posts.innerHTML = `<h2>home mode</h2>`
        ajax({
            url: API.POSTS,
            success: (posts)=>{
                // console.log(posts);
                let postCode = "";
                posts.forEach(post => postCode += PostCart(post));
                d.querySelector('.loader').style.display = "none";
                $posts.innerHTML = postCode;
            }
        });

    }else if(hash.includes("#/search")){  
        $posts.innerHTML = `<h2>search mode</h2>`
        
    }else if(hash === "#/secrets"){  
        $posts.innerHTML = `<h2>secrets mode</h2>`
        
    }else {
        $posts.innerHTML = `<h2>${hash} mode</h2>`

    }



}