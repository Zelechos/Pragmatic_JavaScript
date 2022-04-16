'use strict'

fetch("https://css-tricks.com/wp-json/wp/v2/pages")
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => console.log(json))
    .catch(error => console.error(error))