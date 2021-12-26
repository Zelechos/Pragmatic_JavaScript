'use strict';

// Call , Apply , Bind
// son metodos que nos ayudar a manejar el contexto de diferentes ambitos para llevar y traer datos de diferentes objetos.

// sabemo que en estos momentos el this tendra el contexto de window por defecto
console.log(this);

this.lugar = "Global Context";

function greet(context){
    console.log(`${context}`);
}

// aqui estamos en el contexto global
console.warn(`---------- Llamamos a nuestra funcion greet ---------------`);
greet(this.lugar);

function greetContext(greet, name){
    console.log(`${greet} ${name} desde el ${this.lugar}`);
}

// Creamos un objeto para probar el contexto donde se encuentra
const object = {
    lugar : "Object Context",
}

// con el metodo call(); LLamamos al this de un objeto 
console.warn(`---------- trayendo el contexto de un objeto con call() ---------------`);
greetContext.call(object, "Hola", "Alex");

// si le pasamo como parametro al metodo call(); this nos manda al contexto global
console.warn(`---------- trayendo el contexto de window con call() ---------------`);
greetContext.call(this, "Hola", "Alex");


// tambien con el metodo apply(); llamamos tambien al this del objeto que metemos como parametros
console.warn(`---------- trayendo el contexto de un objeto con apply() ---------------`);
greetContext.apply(object, ["Adios", "Coder"]);

// si mandamos como parametros this al metodo apply() pasa los mismo
console.warn(`---------- trayendo el contexto de window con apply() ---------------`);
greetContext.apply(this, ["Adios", "Coder"]);


// Aprendiendo a usar bind()
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

// ahora creo otro objeto como repaso de lo anterior
console.warn(`------------ usando el metodo bind()---------------`);
const programmer = {
    profession : "Programmer",
    speciality : "Hacker",
    greetPerson : person.greet.bind(person),
    greetMonster : monster.greet.bind(monster)
}

// verificamos si pudimos traer los contexto de ambos objetos
programmer.greetPerson();
programmer.greetMonster();