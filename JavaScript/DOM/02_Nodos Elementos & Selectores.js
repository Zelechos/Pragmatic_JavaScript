'use strict'
// Nodos
// ATENCION : no confundir una etiqueta html(que para javascript eso es un elemento) con un nodo
// Hay diferentes tipos de NODOS algunos serian :
/*
- ELEMENT_NODE
- TEXT_NODE
- PROCESSING_INSTRUCTION_NODE
- COMMENT_NODE
- DOCUMENT_NODE
- DOCUMENT_TYPE_NODE
- DOCUMENT_FRAGMENT_NODE
.etc para dar algunos ejemplos 

mas informacion en : https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
*/

// Primero nos aseguramos de que el archivo HTML cargue antes del script en js para poder manejar los elementos del html

window.addEventListener('load', ()=> {

    // Aqui capturamos los elementos por el nombre de la etiqueta
    console.warn(`Aqui capturamos los elementos por el nombre de la etiqueta`);
    console.log(document.getElementsByTagName("li"));

    // Aqui capturamos los elementos por la clase
    console.warn(`Aqui capturamos los elementos por la clase`);
    console.log(document.getElementsByClassName("card"));

    // Tambien tenemos un elemento para capturar mediante el atributo NAME (usualmente util para formularios)
    console.warn(`Tambien tenemos un elemento para capturar mediante el atributo NAME (usualmente util para formularios)`);
    console.log(document.getElementsByName("name"));

    // Tambien podemos capturar elementos por su Id
    console.warn(`Tambien podemos capturar elementos por su Id`);
    console.log(document.getElementById("menu"));

    /* 
        Actualmente dado el nivel de rendimiento los siguientes metodos han sido reemplazados :
            - getElementsByTagName()
            - getElementsByClassName()
            - getElementsByName()
        han sido reemplazados por los metodos :

            - querySelector()
            - querySelectorAll()
    */


    // Traemos un elemento mediante su Id
    console.warn(`Traemos un elemento mediante su Id`);
    console.log(document.querySelector("#menu"));

    // tenemos que tomar en cuenta que el metodo getElementById() en cuanto a rendimiento es mas veloz que el querySelector() por es se sigue utilizando

    // Ahora intentaremos traernos todos los enlaces
    console.warn(`Ahora intentaremos traernos todos los enlaces`);
    console.log(document.querySelector("a"));

    // Se puede ver que solo nos trajo un enlace pues para eso esta el metodo querySelectorAll()
    console.warn(`Se puede ver que solo nos trajo un enlace pues para eso esta el metodo querySelectorAll()`);
    console.log(document.querySelectorAll("a"));

    // tambien podemos saber la cantidad de elementos 
    console.warn(`tambien podemos saber la cantidad de elementos`);
    console.log(document.querySelectorAll("a").length);

    // con el forEach podemos iterar nuestra lista de enlaces
    console.warn(`con el forEach podemos iterar nuestra lista de enlaces`);
    document.querySelectorAll("a").forEach(label => console.log(label));

    // ahora usaremos el metodo querySelectorAll() para llamar a las clases
    console.warn(`ahora usaremos el metodo querySelectorAll() para llamar a las clases`);
    console.log(document.querySelectorAll(".card-content"));

    // al igual que los arrays tambien se puede usar la nomenclatura para llamar a un solo elemento
    console.warn(`al igual que los arrays tambien se puede usar la nomenclatura para llamar a un solo elemento`);
    console.log(document.querySelectorAll(".card-content")[0]);

    // tambien podemos traer a hijo de elementos seleccionadas 
    console.warn(`tambien podemos traer a hijo de elementos seleccionadas `);
    console.log(document.querySelectorAll("#menu li"));

    // de igual manera si solo queremos traer un elemento aplicamos solo el querySelector()
    console.warn(`de igual manera si solo queremos traer un elemento aplicamos solo el querySelector()`);
    console.log(document.querySelector("#menu li"));
    
});