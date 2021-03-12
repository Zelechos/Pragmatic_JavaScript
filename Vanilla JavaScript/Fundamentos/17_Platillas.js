'use stritc'

//Plantillas de texto

let Nombre = prompt("Digite su Nombre  : ");
let Apellidos  = prompt("Digite sus Apellidos");

//Modo Usual
//let Texto = "Mi nombre es : "+Nombre.trim()+"<br>Mis apellidos son : "+Apellidos.trim();

//Pantilla de JavaScript
let Plantilla  = `
  <h1 class = "titulo">Hola que honda perro</h1>
  <h3>Mi Nombre es : ${Nombre}</h3>
  <h3>Mis Apellidos son: ${Apellidos}</h3>
`;


document.write(Plantilla);
