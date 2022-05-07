'use strict';
import Component from "./Components.js";

const d = document;
const app = new Component({
    element : "#todo-list",
    data : {
        todoList: [],
    },
    template : function(props){
        if(props.todoList.length < 1)return `<p>Empty to do List.</p>`;
        let todos = props.todoList.map( task => `<li>${task}</li>`).join("");
        return todos;
    }
});

d.addEventListener('DOMContentLoaded', app.render);

d.addEventListener('submit', e=>{
    if(!e.target.matches('#todo-form'))return false;
    e.preventDefault();
    const $item = d.getElementById('todo-item');
    if(!$item)return;

    const lastState = app.getState();
    // Actualizar el State de forma Reactiva
    lastState.todoList.push($item.value);
    app.setState({todoList : lastState.todoList});

    // Limpiamos el input
    $item.value = "";
    $item.focus();
});
