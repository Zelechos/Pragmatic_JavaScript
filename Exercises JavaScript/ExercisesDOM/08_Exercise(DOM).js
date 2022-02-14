'use strict'
export default class ButtonHamburger {
    
    // --------------- Menu Hamburguesa ---------------
    constructor(btn, panel, menuLinks){
        this.d = document;
        this.btn = btn;
        this.panel = panel;
        this.menuLinks = menuLinks;
    }
    
    btnHamburger(){
        const $panel = document.querySelector(this.panel);
        const $btn = document.querySelector(this.btn);
        
        // Trabajamos con la Delegacion de Eventos
        this.d.addEventListener('click', e=>{
            
            // Evento para el boton y menu
            if(e.target.matches(this.btn) || e.target.matches(`${this.btn} *`) || e.target.matches(`${this.panel} .menu *`)){
                $panel.classList.toggle('is-active');    
                $btn.classList.toggle('is-active');    
            }
            
            // Evento para los links del menu
            if(e.target.matches(this.menuLinks)){
                $panel.classList.remove('is-active');    
                $btn.classList.remove('is-active');    
            }
        });
    }
}