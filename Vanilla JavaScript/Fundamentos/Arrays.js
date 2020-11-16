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