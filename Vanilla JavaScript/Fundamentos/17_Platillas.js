'use stritc'

//Plantillas de texto

var Nombre = prompt("Digite su Nombre  : ");
var Apellidos  = prompt("Digite sus Apellidos");

//Modo Usual
//var Texto = "Mi nombre es : "+Nombre.trim()+"<br>Mis apellidos son : "+Apellidos.trim();

//Pantilla de JavaScript
var Plantilla  = `
  <h1 class = "titulo">Hola que honda perro</h1>
  <h3>Mi Nombre es : ${Nombre}</h3>
  <h3>Mis Apellidos son: ${Apellidos}</h3>
`;


document.write(Plantilla);
