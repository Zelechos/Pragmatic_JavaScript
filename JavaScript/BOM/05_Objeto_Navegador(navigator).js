'use strict'

console.warn("--------------- Objeto Navegador(navigator) ---------------");

// para empezar tenemos el objeto navigator
console.log(navigator);

// Nos brinda informacion sobre la conexion de internet del usuario
console.log(navigator.connection);

// Nos brinda la geolocalizacion
console.log(navigator.geolocation);

// Nos brinda informacion de los dispositivos como camara y mircrofono
console.log(navigator.mediaDevices);

// Nos brinda informacion de los tipos de formatos que soportan los navegadores web
console.log(navigator.mimeTypes);

// Nos detecta si el usuario esta conectado y tambien si perdio la conexion de internet
console.log(navigator.onLine);

// Es una API QUE NOS AYUDA A CONVERTIR UN WEB A UNA PWA(Progresive Web App) 
console.log(navigator.serviceWorker);

// Es el API de almacenamiento ya sea web storage o local storage
console.log(navigator.storage);

// Nos brinda informacion de si un dispositivo usb esta conectado o no
console.log(navigator.usb);

// Nos brinda informacion sobre el navegador del usuario que se esta conectado a nuestra web
console.log(navigator.userAgent);

