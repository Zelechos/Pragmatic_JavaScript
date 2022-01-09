'use strict'

//Eventos de Teclado
//Evento Load para cargar todoel html para luego cargar el js
window.addEventListener('load', () => {
    
    const form = document.querySelector('#CampoNombre');
    //Evento Focus
    form.addEventListener('focus' ,()=>{
        console.log('[focus] Estas en el Input');
    });

    //Evento Blur
    form.addEventListener('blur',()=>{
        console.log('[blur] Estas fuera de el Input');
    });

    //Evento Keydown
    form.addEventListener('keydown',(event)=>{
        // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keydown] Estas Pulsando esta Tecla :',String.fromCharCode(event.keyCode));
    });

    //Evento Keypress
    form.addEventListener('keypress',(event)=>{
        // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keypress] Tecla presionada :',String.fromCharCode(event.keyCode));
    });
    
    //Evento Keyup
    form.addEventListener('keyup',(event)=>{
        // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keyup] Tecla Soltada :',String.fromCharCode(event.keyCode));
    });

});

