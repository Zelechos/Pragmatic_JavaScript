'use strict';

export function SearchForm (){
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    $form.classList.add('form-search');
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Search ...";

    $form.appendChild($input);

    return $form;
}
