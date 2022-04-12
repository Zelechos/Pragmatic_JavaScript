'use strict'

// Importaciones de la STRIPE_KEYS
import STRIPE_KEYS from './stripe-keys.js';

const d = document;
const $courses = d.getElementById('courses');
const $template = d.getElementById('course-template').content;
const $fragment = d.createDocumentFragment();

// Peticion para obtener los datos como nombre, descripcion , imagenes de los cursos
fetch("https://api.stripe.com/v1/products",{
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}` 
    }
})
    .then(response => response.json())
    .then(json=>{
        json.data.forEach(course =>{
            console.log(course);
        });

        // $courses.appendChild($clone);
    })

// Peticion para obtener los precios de los cursos
fetch("https://api.stripe.com/v1/prices",{
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}` 
    }
})
    .then(response => response.json())
    .then(json=>{
        json.data.forEach(course =>{
            console.log(course);
        });
        // $courses.appendChild($fragment);
    })

                // $template.querySelector('img').setAttribute("src", `${course.images[0]}`);
            // $template.querySelector('.tittle').textContent = course.name;
            // $template.querySelector('.subtittle').textContent = course.description;
            // $fragment.appendChild($template);