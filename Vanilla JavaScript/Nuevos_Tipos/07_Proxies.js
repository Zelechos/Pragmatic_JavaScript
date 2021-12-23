'use strict'

// Proxies
// los proxies son instancias de objetos literales (OJO no de clases)
const person = {
    name: "",
    lastname: "",
    age: 0
}

// Creamos nuestro manejador o handler sirve para realizar la validaciones de los tipos de datos del los valores del objeto asi no se corrompe nuestra copia!!!
const handler = {
    set(object, propertys, value){

        // Aqui podemos realizar las validaciones de nuestro Proxy
        if(Object.keys(object).indexOf(propertys) === -1){
            return console.error(`the property [${propertys}] not exist!!!`);
        }

        let regexNames = /^[A-Za-zÑñ\s]+$/g;
        if((propertys === "name" || propertys === "lastname") && !(regexNames.test(value))){
            return console.error(`the property [${propertys}] only accepts letters and whitespace  !!!`);
        }

        if((propertys === "age") && (value <= 0 || value > 110)){
            return console.error(`the property [${propertys}] only accepts age greater than 0 or less than 111`);
        }

        if((propertys === "age") && !(typeof(value) === "number")){
            return console.error(`the property [${propertys}] only accepts numbers`);
        }
        
        return object[propertys] = value;
    }
}

// Creamos una instancia de mi objeto persona con la ayuda de un Proxy
const alex = new Proxy(person, handler);
console.log(alex);

// Introducimos valores a nuestro Proxy que tambien es una instancia
alex.name = "Alex";
alex.lastname = "Tumiri";
alex.age = 25;
// alex.github = "https://github.com/Zelechos";

console.log(alex);