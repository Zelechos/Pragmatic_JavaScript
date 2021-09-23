'use strict'

// Arrays
const array = [];
const Array1 = [1, true, "Etherum", ["A","B","C",[1,2,3,4,5,6,7,8,9,0]]]; 

console.log(array);
console.log(Array1);
console.warn("length:",Array1.length);
console.log(Array1[2]);
console.log(Array1[3]);
console.log(Array1[1]);
console.log(Array1[3][2]);
console.log(Array1[3][0]);
console.error(Array1[3][3][8]);
console.error(Array1[3][3][2]);

//Otra manera de Crear un Array es:
const arreglo = Array.of("X","Y","Z",0,9);
console.log(arreglo);

const ecommerce = Array(100).fill("Descuento");
console.log(ecommerce);

const lenguajes = new Array("JavaScript","Java","Python","C","PHP","Golang","TypeScript","Perl","Rust","C++");
console.log(lenguajes);

const Colores = ["Blanco","Rojo","Verde"];
console.log(Colores);

//push() para insertar un elemento al final de un array
Colores.push("Negro");
console.log(Colores);

//pop() para eliminar el ultimo elemento de un array
Colores.pop();
console.log(Colores);

//Mostrar un Array con foreach
Colores.forEach(function(element,index){
    console.log(`<li id="${index}">${element}</li>`);
});

//ejemplo2 de como Mostrar un Array con foreach array lenguajes linea 23
document.write("<ul>");
lenguajes.forEach(function(element,index){
    document.write(`<li id="${index}">${element}</li>`);
});
document.write("</ul>");

let Name = "Alex Tumiri Huanca";
let NicksName = ["Zelechos","Argus Aphocraphex","Etherias","Pragmatic","Morphoide","Morphling"];
let Lenguajes = new Array(" Java "," Python "," JavaScript "," Go "," Php "," Scala "," C " ," C++ "," C# "," SQL "," R "," Julia ");

console.log(NicksName);
console.log(Lenguajes);


let Anuncio = `
  <h1>En Que Lenguaje de Programacion quieres comvertirte en experto? </h1>
  <h2>Empieza Sha!!!!! con alguno de nuestro cursos es gratis</h2>
`;
let Elemento = parseInt(prompt("Que Lenguaje de Programacion desea aprender: "));

let LenguajEscogido = `
  <h1>El Lenguaje escogido Fue : <a href= "Cursos.html">${Lenguajes[Elemento]}</a></h1>
`;


document.write(Anuncio);
document.write("<a href = 'Cursos.html'  ><strong><ul>");

//Manera de Mostrar un array
/* Mostrando la manera clasica de recorrer un Array
for (let i = 0; i < Lenguajes.length; i++){
  document.write("<li>"+Lenguajes[i]+"</li>");
}

// Mostrando el Array con el Metodo foreach
Lenguajes.forEach((Elemento, index ) => {
  document.write("<li>"+index+"-"+Elemento+"</li>");
});
*/
// Otra Manera de Mostrar el Array
for (let Lenguaje in Lenguajes){
  document.write("<li>"+Lenguajes[Lenguaje]+"</li>");
}


document.write("</ul></strong></a>");
document.write(LenguajEscogido);

/*para encotrar un elemento en un Array
let Busqueda = Lenguajes.find(Lenguaje => Lenguaje == " Scala ");
console.log(Busqueda);
*/
let BuscandoIndex = Lenguajes.findIndex(Lenguaje => Lenguaje == " Python ");
console.log(BuscandoIndex);


let Precios = [10,20,30,40,50,60];
let BucandoPrecios = Precios.some( precio => precio <= 30 );
console.log(BucandoPrecios);
