'use strict'

//Plantillas de Texto
let nombre = prompt('Introduce tu Nombre : ');
let apellidos = prompt('Introduce tu Apellidos : ');

//let NombreCompleto = 'Mi Nombre es : '+nombre+' y mis Apellidos son:'+apellidos;
let NombreCompleto =`
<h1 onclick="style='background:red;'" style="background:green; cursor:pointer;" >
    Hola Mi Nombre es ${nombre}
</h1>
<h1 onclick="style='font-size:200px;'" style="color:red; ">
    y mi Apellido : ${apellidos}
</h1>
`;


console.log(NombreCompleto);
document.write(NombreCompleto);

