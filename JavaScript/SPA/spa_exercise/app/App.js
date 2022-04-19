import bye from './helpers/bye.js';
import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Posts } from './components/Posts.js';
import { Router } from './components/Router.js';

export function App(){
    const $root = document.getElementById('root');

    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Posts());
    
    Router();
    bye();
}

