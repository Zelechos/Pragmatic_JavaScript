'use strict'

const Numbers = [1,2,3,4];

console.log("----------------- Sin Destructuracion------------------");

// Manera clasica no recomendable!!!
// Sin Destructuracion !!!!!!!!
let uno = Numbers[0] , dos = Numbers[1], tres = Numbers[2], cuatro = Numbers[3];

// Mostramos la variable
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);

console.log("----------------- Con Destructuracion------------------");

const [one, two, three, four] = Numbers;

console.log(one);
console.log(two);
console.log(three);
console.log(four);

console.log("----------------- Con Destructuracion aplicada a objetos ------------------");

//Objeto con mis Datos
const PragmaticCoder = {
    Nombre : "Pragmatic Coder",
    Edad : 24,
    Github : "https://github.com/Zelechos",
    Stack : ["Java","Python","JavaScript","Html","Css","Git"],
    Contactos : {
        Email : "zelechos@hotmail.com",
        Cel : 78662983,
        Facebook : "https://www.facebook.com/PragmaticCodersGroup/",
        Twitter : "@CoderPragmatic",
        LinkedIn : "https://www.linkedin.com/in/alex-tumiri-huanca-6462851b0/",
        Instagram : "https://www.instagram.com/zelechos/"
    }
}

// Aplicamos la Destructuracion

// Las variables tienen que tener el mismo nombre que los atributos de los objetos
const {Nombre , Edad , Github , Stack , Contactos} = PragmaticCoder;

console.log(Nombre);
console.log(Edad);
console.log(Github);
console.log(Stack);

// Tomar en Cuenta  for-in para Objetos
for (const key in Contactos) {
    console.log(key," -> ",Contactos[key]);
}
// Contactos -> Nombre del Objeto
// Contactos[key] -> para mostrar el Valor de los Atributos
// key -> para mostrar el Nombre de los Atributos

// -------- Resultado final -----------------
// Email  ->  zelechos@hotmail.com
// Cel  ->  78662983
// Facebook  ->  https://www.facebook.com/PragmaticCodersGroup/
// Twitter  ->  @CoderPragmatic
// LinkedIn  ->  https://www.linkedin.com/in/alex-tumiri-huanca-6462851b0/
// Instagram  ->  https://www.instagram.com/zelechos/

