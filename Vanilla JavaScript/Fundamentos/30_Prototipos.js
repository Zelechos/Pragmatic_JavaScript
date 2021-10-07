'use strict'

const animal = {
    nombre : "Dragon",
    sonar(){
        console.log("Hacer sonido");
    }
}

const animal2 = {
    nombre : "Panda",
    sonar(){
        console.log("Hacer bosteso");
    }
}

console.log(animal);
console.log(animal2);

// PROTOTIPOS
// Funcion Constructor
function LenguajesDeProgramacion(Nombre, Creador, Repositorio){
    // Artibutos
    this.Nombre = Nombre;
    this.Creador = Creador;
    this.Repositorio = Repositorio;
}

// Metodos
LenguajesDeProgramacion.prototype.programar = function(){
    console.log(`-------------------------------\nProgramando en ${this.Nombre}`);
}

LenguajesDeProgramacion.prototype.depurar = function(){
    console.warn(`Depurando el Codigo . . .`);
}

LenguajesDeProgramacion.prototype.produccion = function(){
    console.log(`Subiendo a Produccion en ${this.Repositorio}`);
}

// HERENCIA PROTOTIPICA
function Subrutina(Nombre,  Creador, Repositorio, NombreSubrutina, Utilidad){
    // Atributos
    this.super = LenguajesDeProgramacion;
    this.super(Nombre,  Creador, Repositorio);
    this.Utilidad = Utilidad;
    this.NombreSubrutina = NombreSubrutina;
}

// Subrutina esta heredando de LenguajesDeProgramacion
Subrutina.prototype = new LenguajesDeProgramacion();
Subrutina.prototype.constructor = Subrutina;

// SobreEscritura de Metodos del Padre al Hijo
Subrutina.prototype.programar = function(){
    console.log(`-------------------------------\n Aqui Programando en ${this.Nombre} la Subrutina ${this.NombreSubrutina} `);
}

Subrutina.prototype.utilidad = function(){
    console.log(`La Utilidad de la Subrutina ${this.NombreSubrutina} es ${this.Utilidad}`);
}

// Creando Instancias de mi Metodo Constructor
const Java = new LenguajesDeProgramacion("Java" , "James Gosling" , "GitHub");
const JavaScript = new LenguajesDeProgramacion("JavaScript" , "Brendan Eich" , "GitHub");

console.log(Java);
console.log(JavaScript);

JavaScript.programar();
JavaScript.depurar();
JavaScript.produccion();

Java.programar();
Java.depurar();
Java.produccion();

// Testeamos nuestro hijo Subrutina
const Factorial = new Subrutina("Java" , "James Gosling" , "GitHub" ,"factorial()", "Hayar el factorial de un Numero");
console.log(Factorial);

Factorial.programar();
Factorial.depurar();
Factorial.utilidad();
Factorial.produccion();