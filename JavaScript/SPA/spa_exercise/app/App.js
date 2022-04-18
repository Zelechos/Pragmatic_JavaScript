import bye from './helpers/bye.js';
import API from './helpers/wordprees_api.js';
import { ajax } from './helpers/ajax.js'
import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';

export function App(){
    const d = document;
    const $root = d.getElementById('root');
    $root.appendChild(Header());
    $root.appendChild(Loader());
    


    ajax({
        url: API.POSTS,
        success: (posts)=>{
            console.log(posts);
        }
    });


    ajax({
        url: API.CATEGORIES,
        success: (categories)=>{
            console.log(categories);
        }
    });

    bye();
}

