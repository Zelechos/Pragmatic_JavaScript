'use strict';

import API from '../helpers/wordprees_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCart } from './PostCart.js';
import { Post } from './Post.js';
import { SearchCard } from './SeachCard.js';
import { ContactForm } from './ContactForm.js';

export async function Router(){
    const d = document;
    const w = window;
    const $main = d.getElementById('main');

    // usamos destructuracion para obtener el hash del navegador
    let { hash } = location;
    // console.log(hash);

    $main.innerHTML = null;

    // Carga de contenido en base al hash
    if(!hash || hash === "#/" ){
        await ajax({
            url: API.POSTS,
            success: (posts)=>{
                // console.log(main);
                let postCode = "";
                posts.forEach(post => postCode += PostCart(post));
                $main.innerHTML = postCode;
            }
        });

    }else if(hash.includes("#/search")){  
        let query = localStorage.getItem('wpSearch');

        if(!query){
            d.querySelector('.loader').style.display = "none";
            return false;
        };

        await ajax({
            url: `${API.SEARCH}${query}`,
            success: (responses)=>{
                let searchCode = "";

                (responses.length === 0)
                    ? searchCode = `<h1 class="error" >No matches found of ${query}!!</h1>`
                    : responses.forEach(response => searchCode += SearchCard(response));

                $main.innerHTML = searchCode;
            }
        })
        
    }else if(hash === "#/contact"){  
        $main.appendChild(ContactForm());
        
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