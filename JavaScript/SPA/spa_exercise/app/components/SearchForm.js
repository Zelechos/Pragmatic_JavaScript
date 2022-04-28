'use strict';

export function SearchForm (){
    const d = document;
    const $form = d.createElement('form');
    const $input = d.createElement('input');
    $form.classList.add('search-form');
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Search ...";
    $input.autocomplete = "off";
    $form.appendChild($input);

    if(location.hash.includes("#/search")){
        $input.value = localStorage.getItem('wpSearch');
    }

    // Evento para eliminar la busqueda de nuestro localStorage 
    d.addEventListener('search', e=>{
        if(!e.target.matches("input[type='search']"))return false;
        if(!e.target.value) localStorage.removeItem('wpSearch');
    })

    // Evento para procesar la busqueda y guardar la busqueda en el localStorage
    d.addEventListener('submit', e=>{
        if(!e.target.matches('.search-form'))return false;
        e.preventDefault();
        localStorage.setItem('wpSearch', e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    });

    return $form;
}
