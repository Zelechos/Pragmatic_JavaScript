import { App } from './App.js';

// Ejecutamos nuestra function App
document.addEventListener('DOMContentLoaded', App);

// Evento para detectar el cambio del hash con esto nos referimos al cambio de la URl de la navegador
// Cuando identifique un cambio en el hash se va a recargar la web y el metodo App();
window.addEventListener('hashchange', App);