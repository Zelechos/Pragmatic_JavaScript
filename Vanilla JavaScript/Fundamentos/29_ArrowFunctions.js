'use strict'

// Arrow Function
const Saludar = ()=> console.log("Hola Hacker");

// Aqui llamamos a nuestra arrow function
Saludar();

// Ejemplos con un parametro de entrada
const Pregunta = Name => console.log(`Hola ${Name} eres un Hacker? `);

Pregunta("Pragmatic Coder");
Pregunta("Antonella");
Pregunta("Agustin");

// Ejemplos con un o mas parametros de entrada
const Suma = (Number , Number2) => console.log( Number + Number2 );
Suma(1000,90000);
Suma(4324,90);

console.log("-----------------esto se logro con 4 lineas de codigo-----------------");
// Ejemplo de una Arrow functions con muchas lineas de codigo
const ParOImpar = (Number)=>{
    if(Number % 2 == 0)console.log(`${Number} es Par`);
        else console.log(`${Number} es Impar`);
}
ParOImpar(5);

console.log("-----------------esto se logro con una sola linea de codigo-----------------");
// Ejemplo de una Arrow functions con una estructura condicional de una solo linea
const Par_Impar = Number => (Number % 2 == 0)? console.log(`${Number} es Par`) : console.log(`${Number} es Impar`);
Par_Impar(9);

console.log("-----------------arrowfunction con foreach combinados-----------------");
// Ejemplo de como recorre un Array con Foreach usando ArrowFunctions
const Languages = ["JavaScript", "Java", "Python", "C", "C++", "C#", "Go", "TypeScript"];

console.log("-----------------esto se logro con 3 lineas de codigo-----------------");

Languages.forEach( language =>{
    console.log(language);
});

console.log("-----------------esto se logro con una sola linea de codigo-----------------");

Languages.forEach( language => (language.includes('G')) ? console.log(language + "-> Dificil"): console.log(language + "-> Facil"));

// Contexto del ArrowFunctions en Objetos
const Persona = {
    Name: "Argus Aphocraphex",
    Saludar : ()=>{
        console.log("La ArrowFunction NO Reconoce el Contexto de Su Padre si no el contexto donde su Obejto Padre a sido declarado");
        console.log(this);
    },
    Despedirse : function(){
        console.log("Una funcion anonima Reconoce el Contexto de Su Padre");
        console.log(this);
    }
}

console.log("____________________________CONTEXTO_________________________");
Persona.Saludar();
Persona.Despedirse();
/* ADVERTENCIA : No utilizar arrow function para declarar rutinas en los objetos js 
    para matener su contexto si no utilizar funciones de forma literal
*/
