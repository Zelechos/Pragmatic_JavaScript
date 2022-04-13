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

const formatMoney = price => `$${price.slice(0,-2)}.${price.slice(-2)}`;

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

            //Hacemos esto porque no puedo eliminar el precio erroneo
            if(price.id !== "price_1KnbNfF3EePOWwxlveNT63M7"){
                console.log(productData);
                $template.querySelector(".course").setAttribute("data-price", price.id);
                $template.querySelector('img').setAttribute('src', productData[0].images[0]);
                $template.querySelector('img').setAttribute('alt', productData[0].name);
                $template.querySelector("figcaption").innerHTML = `
                ${productData[0].name}<br>
                ${productData[0].description}<br>
                ${formatMoney(price.unit_amount_decimal)} ${(price.currency).toUpperCase()}<br>
                `;
                
                // Manera de insertar el contenido del template a un elemento
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            }
        });

        $courses.appendChild($fragment);
    })
    .catch(error =>{
        let message = error.statusText || "Algo Salio Mal!";
        $courses.innerHTML = `<p>Error ${error.status} : ${message}</p>`;
    })


    // Creamos un evento click para las tarjetas para la comprar de productos
    d.addEventListener('click', e=>{

        if(e.target.matches(".course *")){
            let priceId = e.target.parentElement.getAttribute("data-price");
            console.log(priceId);
            // Invocamos el objeto Stripe y le pasamos como parametro la llave publica
            // llamamos a su metodo redirectToCheckout(); para redirigir la web a la pasarela de pagos 
            // el metodo redirectToCheckout() tiene como parametro un objeto de configuracion que es el siguiente!!
            Stripe(STRIPE_KEYS.public)
            .redirectToCheckout({
                lineItems:[{price: priceId, quantity: 1 }],
                mode : "payment",
                successUrl : "http://127.0.0.1:5500/Exercises%20JavaScript/ExercisesAJAX/09_Exercise/assets/stripe-success.html",
                cancelUrl : "http://127.0.0.1:5500/Exercises%20JavaScript/ExercisesAJAX/09_Exercise/stripe-cancel.html"
            })
            .then(response => {
                console.log(response);
                if(response.error){
                    $courses.insertAdjacentHTML('afterend', response.error.message);
                }
            })
        }




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