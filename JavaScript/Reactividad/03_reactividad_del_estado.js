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

// NOTA : EL ESTADO SE TIENE QUE MANTENER INMUTABLEEEE!!!
// Actualizar el State de forma Reactiva
const setState = (object)=>{
    for (let key in object) {
        if(state.hasOwnProperty(key)){
            state[key] = object[key];
        }
    }
    render();
}

/**
 * Evento para ejecutar el render a la carga de la pagina
 */
d.addEventListener('DOMContentLoaded', render);

// Establecemos valores por defecto al state
setState({
    todoList: ["Task 1", "Task 2", "Task 3"],
    name : "virus"
});

// Tenemos que evitar que el estado sea mutable
const item = state.todoList;
item.push("Task 4");

/**
 * Evento para traer los valores del form !!
 */
d.addEventListener('submit', e=>{
    if(!e.target.matches('#todo-form'))return false;
    e.preventDefault();
    const $item = d.getElementById('todo-item');
    if(!$item)return;

    // Actualizar el State y UI
    state.todoList.push($item.value);
    render();

    // Limpiamos el input
    $item.value = "";
    $item.focus();
});
