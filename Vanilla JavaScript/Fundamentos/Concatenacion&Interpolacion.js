window.addEventListener('load', ()=>{
    'use strict'

    let Nombre = 'Argus';
    let Apellido = 'Aphocraphex';
    
    //Concatenacion
    const Mensaje = "Nombre: "+Nombre+"\nApellido: "+Apellido;
    console.log(Mensaje);
    
    // Interpolacion de Vaiables
    //Template String ${Aqui adentro viene la variable}
    
    const Saludo = `Hola Mi Nombre es ${Nombre} ${Apellido}.`;
    console.log(Saludo);
    
    const ListaMal = "<ul><li>Verano</li><li>Invierno</li><li>Otoño</li><li>Primavera</li></ul>";

    console.log("El codigo HTML esta Mal Escrito aqui: \n"+ListaMal);

    const Lista = `
    <ul>
        <li>Verano</li>
        <li>Invierno</li>
        <li>Otoño</li>
        <li>Primavera</li>
    </ul>
    `;
    document.write(Lista);
    console.log("El Codigo HTML esta Bien escrito aqui:\n"+Lista);

    //Agregando valores al texto 
    let LLenar = "Java";
    console.log(LLenar);
    LLenar += "Script";
    console.log(LLenar);
    LLenar += " Es el mejor Lenguaje";
    console.log(LLenar);


});
