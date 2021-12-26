'use strict'

// This

// muestra valores en base a su contexto

// el contexto actual de this es el del objeto window por defecto
console.log(this);
console.log(window);
console.warn(this === window);

this.name = "Global";

console.log(this.name);

function print(){
    console.log(this.name);
}

console.warn(`------------- Cambiamos en contexto de this con otros objetos-------------`);

// creamos un objeto para cambiar el contexto de this
const users = {
    name : "My users context",
    print
    // Como se puede apreciar el valor de this cambia dependiendo al contexto que se encuentra
}
users.print();


// creamos otro objeto para ver otro contexto
const passwords = {
    name : "123456siete",
    print
}
passwords.print();


const email = {
    ether : "https://github.com/Zelechos",
    printEmail : ()=>{
        console.log(this.name);
    }
}

// Aqui como se puede ver un arrow function rompe el contexto del this asignando ese contexto al padre en este caso a el objeto window
email.printEmail();

console.warn(`----------- Probando this con una constructor------------`);
// Ahora probamos el this con una funcion constructora

function Programmer(name){
    this.name = name;

    return ()=> console.log(this.name);
    
}

const gusdtav = new Programmer("gustav");
gusdtav();
