'use strict';

// Aqui trabajamos para hacer nuestro estado Inmutable
const d = document;

/**
 *  Para este ejemplo no usaremos el State Global 
 *  porque queremos que cada componente tenga su 
 *  propio state interno.
 */  
const state = { 
    todoList : []
}

// Tambien creamos un template de HTML ahora conocido como un template de UI
const template = ()=>{
    if(template.data.todoList.length < 1)return `<p>Empty to do List.</p>`;
    let todos = template.data.todoList.map( task => `<li>${task}</li>`).join("");
    return todos;
};

/**
 *  Ahora crearemos un state local para eso agregaremos
 *  el State al template que genera el componente de UI
 *  (esto hara que nuestro state ahora sea local y no global)
 */ 
template.data = {
    todoList : []
}

// Render UI
const render = ()=>{
    console.log("Global State => ",state);//Mostramos el estado en la consola
    console.log("Local State => ",template.data);//Mostramos el estado en la consola
    const $list = d.getElementById('todo-list');
    if(!$list)return;
    $list.innerHTML = template();
}

// NOTA : EL ESTADO SE TIENE QUE MANTENER INMUTABLEEEE!!!
// Actualizar el State de forma Reactiva
const setState = (object)=>{
    for (let key in object) {
        if(template.data.hasOwnProperty(key)){
            template.data[key] = object[key];
        }
    }
    render();
}

// NOTA: AQUI APLICAMOS LA INMUTABILIDAD!!!
// Obtenemos una copia inmutable del Estado!!!
const getState = ()=> JSON.parse(JSON.stringify(template.data));

/**
 * Evento para ejecutar el render a la carga de la pagina
 */
d.addEventListener('DOMContentLoaded', render);

// Establecemos valores por defecto al state
setState({
    todoList: ["Task 1", "Task 2", "Task 3"],
});

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
