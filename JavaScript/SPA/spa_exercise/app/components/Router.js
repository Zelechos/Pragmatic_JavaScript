'use strict';

import API from '../helpers/wordprees_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCart } from './PostCart.js';
import { Post } from './Post.js';

export async function Router(){
    const d = document;
    const w = window;
    const $main = d.getElementById('main');

    // usamos destructuracion para obtener el hash del navegador
    console.log(location);
    let { hash } = location;

    // console.log(hash);

    $main.innerHTML = null;

    // Carga de contenido en base al hash
    if(!hash || hash === "#/" ){
        $main.innerHTML = `<h2>home mode</h2>`
        await ajax({
            url: API.POSTS,
            success: (posts)=>{
                // console.log(main);
                let postCode = "";
                posts.forEach(post => postCode += PostCart(post));
                $main.innerHTML = postCode;
            }
        });
        console.log(API.POST);

    }else if(hash.includes("#/search")){  
        $main.innerHTML = `<h2>search mode</h2>`
        
    }else if(hash === "#/secrets"){  
        $main.innerHTML = `<h2>secrets mode</h2>`
        
    }else if(hash === "#/hacker"){  
        $main.innerHTML = `
        <pre rel="JS" class="wp-block-csstricks-code-block language-css" data-line="">
            <h2>hacker mode</h2>
            <code markup="tt">
            import API from '../helpers/wordprees_api.js';
            import { ajax } from '../helpers/ajax.js';
            import { PostCart } from './PostCart.js';
            import { Post } from './Post.js';
            </code>
        </pre>`;

    }else{
        await ajax({
            url: `${API.POST}/${localStorage.getItem("wpPostId")}`,
            success: (data)=> $main.innerHTML = Post(data)
        });
    }
    
    d.querySelector('.loader').style.display = "none";
}