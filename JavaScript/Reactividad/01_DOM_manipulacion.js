'use strict';

// Haremos una manipulacion comun y corriente como ya estamos acostrumbrados a trabajar en el DOM
const d = document;
const $item = d.getElementById('todo-item');
const $list = d.getElementById('todo-list');

/**
 * Evento para traer los valores del form !!
 */
d.addEventListener('submit', e=>{
    if(!e.target.matches('#todo-form'))return false;
    e.preventDefault();

    // Agregamos un item a la lista
    const $li = d.createElement('li');
    $li.textContent = $item.value;

    // Limpiamos el input
    $item.value = "";
    $item.focus();

    // Inseratmos el li a nuestro list 
    $list.appendChild($li);
});
