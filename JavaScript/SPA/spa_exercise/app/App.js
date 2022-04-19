import bye from './helpers/bye.js';
import API from './helpers/wordprees_api.js';
import { ajax } from './helpers/ajax.js'
import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Posts } from './components/Posts.js';
import { PostCart } from './components/PostCart.js';

export function App(){
    const d = document;
    const $root = d.getElementById('root');
    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());


    ajax({
        url: API.POSTS,
        success: (posts)=>{
            // console.log(posts);
            let postCode = "";
            posts.forEach(post => postCode += PostCart(post));
            d.querySelector('.loader').style.display = "none";
            d.getElementById('posts').innerHTML = postCode;
        }
    });


    ajax({
        url: API.CATEGORIES,
        success: (categories)=>{
            // console.log(categories);
        }
    });

    bye();
}

