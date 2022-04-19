'use strict';

export function Menu(){
    const $menu = document.createElement('nav');
    $menu.classList.add('menu');
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Search</a>
        <span>-</span>
        <a href="#/secrets">Secrets</a>
        <span>-</span>
        <a href="https://github.com/Zelechos" target="_blank" rel="noopener">Me</a>
    `;


    return $menu;
}