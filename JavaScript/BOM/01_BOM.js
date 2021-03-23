'use strict'

//Bom - Browser Object Model


function getBom(){
    //para ver la alture el tamaño de pantalla que tiene sin la consola
    console.log(window.innerHeight);

    //para ver la anchura el tamaño de pantalla que tiene sin la consola
    console.log(window.innerWidth);

    //para saber las dimensiones de la pantalla del usuario 
    console.log(screen.width);
    console.log(screen.height);

    //te muestra toda la informacion de la pagina actual q esta abierta
    console.log(window.location);
    // te muestra el href del la pagina actual abierta
    console.log(window.location.href);
    
}

function Redirect(url){
    window.location.href = url;
}

function Abrir(url){
    window.open(url,"","width=400px,height=300px");
    //window.location.href = url;
}
Abrir();
getBom();