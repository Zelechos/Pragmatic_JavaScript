'use strict';
import API from '../helpers/wordprees_api.js'

export function Title(){
    const $h1 = document.createElement('h1');
    $h1.innerHTML = `<a href="${API.DOMAIN}" target="_blank" rel="noopener">Hacking to ${API.NAME.toUpperCase()}</a>`;
    return $h1;
}