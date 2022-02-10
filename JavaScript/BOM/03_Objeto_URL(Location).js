'use strict'

console.warn("--------------- Objeto URL(location) ---------------");

// Para empezar tenemos el objeto location
console.log(location);

// Para tener la url donde se origina la web, el documento
console.log(location.origin);

// Sirve para obtener el protocolo
console.log(location.protocol);

// Sirve para obtener la direccion IP y puerto de la web
console.log(location.host);

// Sirve para obtener la direccion IP o el nombre de dominio de tu web (esto depende si tienes levantada tu web)
console.log(location.hostname);

// Sirve para obtener el puerto por el que escucha el servidor (en este caso liveserver)
console.log(location.port);

// Sirve para obtener toda la URl completa de la web
console.log(location.href);

// Sirve para obtener el valor de la URL que esta despues de un hash
console.log(location.hash);

// Sirve para obtener el nombre del archivo que estoy consultando
console.log(location.pathname);

// Sirve para obtener los parametros de la url
console.log(location.search);

// -------------------------- Algunos Metodos --------------------------

// Sirve para recargar la pagina ciclicamente (Cuidado)
// location.reload();



