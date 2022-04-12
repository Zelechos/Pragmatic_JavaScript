'use strict'

// Importaciones de la STRIPE_KEYS
import STRIPE_KEYS from './stripe-keys.js';

const d = document;
const $courses = d.getElementById('courses');
const $template = d.getElementById('course-template').content;
const $fragment = d.createDocumentFragment();
const stripeAuthorization = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}` 
    }
};

let prices, products;

// El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
Promise.all([
    fetch("https://api.stripe.com/v1/products", stripeAuthorization),
    fetch("https://api.stripe.com/v1/prices", stripeAuthorization)
])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(json =>{
        // console.log(json);
        products = json[0].data;
        prices = json[1].data;
        // console.log(products);
        // console.log(prices);

        // Creando las tarjetas en html
        prices.forEach(price =>{
            let productData = products.filter(product => product.id === price.product);
            console.log(productData);
            $template.querySelector(".course").setAttribute("data-price", price.id);
            $template.querySelector('img').setAttribute('src', productData[0].images[0]);
            $template.querySelector('img').setAttribute('alt', productData[0].name);
            $template.querySelector("figcaption").innerHTML = `
                <h2 class="tittle">${productData[0].name}</h2>
                <h4 class="subtittle">${productData[0].description}</h4>
                <h4 class="prices">$${price.unit_amount / 100}.00 ${(price.currency).toUpperCase()}</h4>
                
            `;
            
            // Manera de insertar el contenido del template a un elemento
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $courses.appendChild($fragment);
    })
    .catch(error =>{
        let message = error.statusText || "Algo Salio Mal!";
        $courses.innerHTML = `<p>Error ${error.status} : ${message}</p>`;
    })



// GRACIAS al metodo Promise.all(iterable); ya no necesitamos las dos peticiones que hicimos anteriormente

// Peticion para obtener los datos como nombre, descripcion , imagenes de los cursos
// fetch("https://api.stripe.com/v1/products",{
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}` 
//     }
// })
//     .then(response => response.json())
//     .then(json=>{
//         json.data.forEach(course =>{
//             console.log(course);
//         });

//     })

// Peticion para obtener los precios de los cursos
// fetch("https://api.stripe.com/v1/prices",{
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}` 
//     }
// })
//     .then(response => response.json())
//     .then(json=>{
//         json.data.forEach(course =>{
//             console.log(course);
//         });
//     })