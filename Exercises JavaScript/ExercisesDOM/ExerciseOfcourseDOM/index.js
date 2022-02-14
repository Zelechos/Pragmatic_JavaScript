'use strict'

'use strict';

// ---------- Imports ----------
import ButtonHamburger from '../08_Exercise(DOM).js';
import  ClockAlarm from '../09_Exercise(DOM).js';


document.addEventListener('DOMContentLoaded', e=>{
    
    // ---------- Instance of Button Hamburger ----------
    const btn = new ButtonHamburger('.panel-btn', '.panel', '.menu a');
    btn.btnHamburger();

    // ---------- Instance of Reloj & Alarma ----------
    const clock = new ClockAlarm('.reloj');
    clock.digitalClock("#activar-reloj", "#desactivar-reloj");
    clock.alarm("#activar-alarma", "#desactivar-alarma", "./assets/sounds/Caprice24.mp3");

});