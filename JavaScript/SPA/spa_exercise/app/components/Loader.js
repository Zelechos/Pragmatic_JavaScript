'use strict';

export function Loader(){
    const $loader = document.createElement('img');
    $loader.src = "./app/assets/img/rings.svg";
    $loader.alt = "Cargando ...";
    $loader.classList.add('loader');
    return $loader;
}
