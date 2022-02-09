'use strict'
// Metodos del BOM
// Estos metodos que tenemos el BOM son muy conocidos incluso ya los hemos usado y son los siguientes:

// window.alert("Lanza un alerta en la web");
// window.confirm("Esto es un Confirm??");
// window.prompt("Esto si es un Prompt");

// Otros Metodos 
    // Creamos una variable para crear un referencia a la ventana que estamos abriendo 
    let mywindow;

    // Aqui delegamos el evento click de los botones
    // APLICANDO DELEGACION DE EVENTOS
    document.addEventListener("click", e => {
        console.log(e.target);
        
        if(e.target.matches("#abrir-ventana")){
            mywindow = window.open("https://github.com/Zelechos/");
            
            // Tambien funcion sin el window de la siguiente manera
            // open("https://github.com/Zelechos/");
        }

        if(e.target.matches("#cerrar-ventana")){
            // Esto es para cerrar la ventana del navegador actual 
            // window.close();

            // y para cerrar la ventana que hemos abierto anteriormente nos traemos la referencia donde esta almacenada
            mywindow.close();

            // Tambien funcion sin el window de la siguiente manera
            // close();
        }

        if(e.target.matches("#imprimir-ventana")){
            // MUY IMPORTANTEN PUEDES IMPRIMIR ESTA UNA WEB O GUARDARLA EN FORMATE PDF
            window.print();

            // Tambien funcion sin el window de la siguiente manera
            // open("https://github.com/Zelechos/");
        }
    });
