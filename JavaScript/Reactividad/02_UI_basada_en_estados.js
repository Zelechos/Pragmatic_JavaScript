'use strict';

// Aqui trabajamos con una UI o interfaz basada en los estados
const d = document;

// Creamos un objeto para nuestro estado actual
const state = { 
    todoList : []
}

// Tambien creamos un template de HTML ahora conocido como un template de UI
const template = ()=>{
    if(state.todoList.length < 1)return `<p>Empty to do List.</p>`;
    let todos = state.todoList.map( task => `<li>${task}</li>`).join("");
    return todos;
};

// Render UI
const render = ()=>{
    console.log(state);//Mostramos el estado en la consola
    const $list = d.getElementById('todo-list');
    if(!$list)return;
    $list.innerHTML = template();
}

/**
 * Evento para ejecutar el render a la carga de la pagina
 */
d.addEventListener('DOMContentLoaded', render);


/**
 * Evento para traer los valores del form !!
 */
d.addEventListener('submit', e=>{
    if(!e.target.matches('#todo-form'))return false;
    e.preventDefault();
    const $item = d.getElementById('todo-item');
    if(!$item)return;

    //Una buena practica de programacion es evitar manipularlo directamente aqui entra el concepto de mutabilidad, inmutabilidad, reactividad
    // Actualizar el State y UI NOTA : ESTO NO SE HACE SOLUCION => en 03_reactividad_del_estado.js
    state.todoList.push($item.value);
    render();

    // Limpiamos el input
    $item.value = "";
    $item.focus();
});
