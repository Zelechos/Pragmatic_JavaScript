import bye from './helpers/bye.js';
import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';
import { InfiniteScroll } from './helpers/infinite_scroll.js';

export function App(){
    const $root = document.getElementById('root');

    // Limpiamos el contenido para lograr un recarga limpia
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Loader());
    $root.appendChild(Main());
    
    Router();
    InfiniteScroll();
    bye();
}

