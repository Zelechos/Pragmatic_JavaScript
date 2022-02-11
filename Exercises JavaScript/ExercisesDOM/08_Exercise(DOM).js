'use strict'

// --------------- Menu Hamburguesa ---------------

export default function buttonHamburger(btn, panel, menuLinks){

    // Trabajamos con la Delegacion de Eventos
    const d = document;
    d.addEventListener('click', e=>{
        const $panel = document.querySelector(panel);
        const $btn = document.querySelector(btn);
        // Evento para el boton y menu
        if(e.target.matches(btn) || e.target.matches(`${btn} *`) || e.target.matches(`${panel} .menu *`)){
            $panel.classList.toggle('is-active');    
            $btn.classList.toggle('is-active');    
        }

        // Evento para los links del menu
        if(e.target.matches(menuLinks)){
            $panel.classList.remove('is-active');    
            $btn.classList.remove('is-active');    
        }

    });
}
