'use strict';

// Call , Apply , Bind
// son metodos que nos ayudar a manejar el contexto de diferentes ambitos para llevar y traer datos de diferentes objetos.
console.log(this);

this.lugar = "Global Context";

function greet(context){
    console.log(`${context}`);
}

function greetContext(greet, name){
    console.log(`${greet} ${name} desde el ${this.lugar}`);
}

greet(this.lugar);

// Creamos un objeto para probar en contexto se encuentra

const object = {
    lugar : "Object Context",
}

// con el metodo call(); LLamamos al this de un objeto 
greetContext.call(object, "Hola", "Alex");

// si le pasamo como parametro al metodo call(); this nos manda al contexto global
greetContext.call(this, "Hola", "Alex");


// tambien con el metodo apply(); llamamos tambien al this del objeto que metemos como parametros
greetContext.apply(object, ["Adios", "Coder"]);

// si mandamos como parametros this al metodo apply() pasa los mismo
greetContext.apply(this, ["Adios", "Coder"]);


this.name= "Window";

// Creamos otro objeto
const person = {
    name: "Alex",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.greet();

// ahora vamos a crear otro objeto para enlazar el contexto con el metodo bind();
const monster = {
    greet: person.greet.bind(person)
}

monster.greet();
