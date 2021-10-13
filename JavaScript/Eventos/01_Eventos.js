'use strict'

//Eventos de Teclado
//Evento Load para cargar todoel html para luego cargar el js
window.addEventListener('load', () => {
    
    const Form = document.querySelector('#CampoNombre');
    //Evento Focus
    Form.addEventListener('focus' ,()=>{
        console.log('[focus] Estas en el Input');
    });

    //Evento Blur
    Form.addEventListener('blur',()=>{
        console.log('[blur] Estas fuera de el Input');
    });

    //Evento Keydown
    Form.addEventListener('keydown',(event)=>{
            // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keydown] Estas Pulsando esta Tecla :',String.fromCharCode(event.keyCode));
    });

    //Evento Keypress
    Form.addEventListener('keypress',(event)=>{
            // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keypress] Tecla presionada :',String.fromCharCode(event.keyCode));
    });
    
    //Evento Keyup
    Form.addEventListener('keyup',(event)=>{
        // fromCharCode(event.keyCode) para capturar que tecla se esta pulsando
        console.log('[Keyup] Tecla Soltada :',String.fromCharCode(event.keyCode));
    });

});

