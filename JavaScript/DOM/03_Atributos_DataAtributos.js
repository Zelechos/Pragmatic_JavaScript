'use strict'

// Accedemos con el DOM a los Atributos y Data Atributos de las etiquetas HTML
window.addEventListener('load', ()=> {

    //------------------------------- ATRIBUTOS-------------------------------
    // traemos el valor del atributo de nuestra etiqueta HTML (NO ES RECOMENDABLE)
    console.warn(`traemos el valor del atributo de nuestra etiqueta HTML `);
    console.log(document.documentElement.lang);
    // otra manera recomendable de traer el valor de los atributos de una etiqueta HTML seria
    console.warn(`otra manera recomendable de traer el valor de los atributos de una etiqueta HTML seria con el metodo getAttribute()`);
    console.log(document.documentElement.getAttribute("lang"));
    
    // ahora capturamos un enlace para demostrar que es recomendable usar el metodo getAttribute()
    console.warn(`ahora capturamos un enlace para demostrar que es recomendable usar el metodo getAttribute()`);

    console.warn(`sin usar el metodo getAttribute()`);
    console.log(document.querySelector(".link-dom").href);
    
    console.warn(`usando el metodo getAttribute()`);
    console.log(document.querySelector(".link-dom").getAttribute("href"));

    // tambien podemos establecer los valores de los atributos de una etiqueta de las siguientes 2 maneras:
    console.warn(`cambiando los valores de los atributos`);
    // Notacion de Punto 

    console.warn(`con notacion de punto`);
    document.documentElement.lang = "es"
    console.log(document.documentElement.lang);

    console.warn(`con el metodo setAttribute()`);
    document.documentElement.setAttribute("lang", "en");
    console.log(document.documentElement.lang);

    // Tambien podemos crearle un atributo con un respectivo valor a las etiquetas HTML
    const $labelLinkDom = document.querySelector(".link-dom");

    // Ahora crearemos una atributo target para la llamada a esta funcion 
    $labelLinkDom.setAttribute("target", "_blank");

    // para abrir en una nueva pestaña del navegador. ... Si se vincula a un sitio web externo afectado por el código malicioso, ese sitio web puede usar la propiedad de JavaScript window.
    $labelLinkDom.setAttribute("rel", "noopener");

    $labelLinkDom.setAttribute("href", "https://github.com/Zelechos");


    // Tambien podemos quitar los atributos de la etiqueta HTML 
    console.warn(`Tambien podemos quitar los atributos de la etiqueta HTML `);
    console.log($labelLinkDom.hasAttribute("rel"));
    console.warn(`Primero validamos si existe el atributo que queremos eliminar`);
    $labelLinkDom.removeAttribute("rel")
    console.log($labelLinkDom.hasAttribute("rel"));

    
    // -------------------------------DATA ATRIBUTOS-------------------------------
    // Vamos a obtener el data-description atributo que creamos para este ejemplo 
    console.warn(`Vamos a obtener el data-description atributo que creamos para este ejemplo `);
    console.log($labelLinkDom.getAttribute("data-description"));

    // tambien podemos accerder con la notacion de punto
    console.warn(`tambien podemos accerder con la notacion de punto`);
    console.log($labelLinkDom.dataset);

    // ahora vamos a cambiar el valor de un data_atribute
    console.warn(`ahora vamos a cambiar el valor de un data_atribute`);
    console.log($labelLinkDom.dataset);
    $labelLinkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
    console.log($labelLinkDom.dataset);

    // ahora vamos a cambiar el valor de un data_atribute usando la notacion de punto
    console.warn(`ahora vamos a cambiar el valor de un data_atribute usando la notacion de punto`);
    $labelLinkDom.dataset.ssh = "dfalwg523h8450f824589h2340895f7";
    console.log($labelLinkDom.dataset);

    // tambien podemos verificar si ese data-atributo existe en la etiqueta
    console.warn(`tambien podemos verificar si ese data-atributo existe en la etiqueta`);
    console.log($labelLinkDom.hasAttribute("data-ssh"));

    // tambien podemos eliminar los data-atributos 
    console.warn(`tambien podemos eliminar los data-atributos`);
    console.log($labelLinkDom.hasAttribute("data-ssh"));
    $labelLinkDom.removeAttribute("data-ssh");
    console.log($labelLinkDom.hasAttribute("data-ssh"));
    
});