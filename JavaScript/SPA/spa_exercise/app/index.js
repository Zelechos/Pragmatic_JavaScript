import { App } from './App.js';

document.addEventListener('DOMContentLoaded', e=>{
    // Ejecutamos nuestra function App
    App();
});

// Evento para detectar el cambio del hash
// Cuando identifique un cambio en el hash se va a recargar la web y el metodo App();
window.addEventListener('hashchange', App);