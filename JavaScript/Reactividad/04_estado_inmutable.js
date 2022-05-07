'use strict';

// Aqui trabajamos para hacer nuestro estado Inmutable
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

// NOTA: AQUI APLICAMOS LA INMUTABILIDAD!!!
// Obtenemos una copia inmutable del Estado!!!
const getState = ()=> JSON.parse(JSON.stringify(state));

/**
 * Evento para ejecutar el render a la carga de la pagina
 */
d.addEventListener('DOMContentLoaded', render);

// Establecemos valores por defecto al state
setState({
    todoList: ["Task 1", "Task 2", "Task 3"],
    //esto no aparece porque mi estado esta programado para ser inmutable osea esta protegido claramente esto se puede cambiar!!!!
    name : "virus"
});

/**
 *  Tenemos que evitar que el estado sea mutable el 
 *  Estado es Mutable cuando permitimos modificar 
 *  el estado directamente creando una copia del 
 *  objeto y agregando otro elemento.
 */ 
const item = getState();
item.todoList.push("Task 4");
console.warn(`Copia de mi Estado que es Mutable`);
console.warn(item);
console.warn(`Estado InMutable`);
console.warn(state);

/**
 * Evento para traer los valores del form !!
 */
d.addEventListener('submit', e=>{
    if(!e.target.matches('#todo-form'))return false;
    e.preventDefault();
    const $item = d.getElementById('todo-item');
    if(!$item)return;

    const lastState = getState();
    // Actualizar el State de forma Reactiva
    lastState.todoList.push($item.value);
    setState({todoList : lastState.todoList});

    // Limpiamos el input
    $item.value = "";
    $item.focus();
});
