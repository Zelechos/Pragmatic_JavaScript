'use strict'

// Arrays

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
document.write("<a href = 'Cursos.html'><strong><ul>");

/*(1) Mostrando la manera clasica de recorrer un Array
for (let i = 0; i < Lenguajes.length; i++){
  document.write("<li>"+Lenguajes[i]+"</li>");
}

//(2) Mostrando el Array con el Metodo foreach
Lenguajes.forEach((Elemento, index ) => {
  document.write("<li>"+index+"-"+Elemento+"</li>");
});
*/
//(3) Otra Manera de Mostrar el Array
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
