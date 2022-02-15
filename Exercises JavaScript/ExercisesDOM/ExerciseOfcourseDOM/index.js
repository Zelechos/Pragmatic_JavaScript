'use strict';

// ---------- Imports ----------
import ButtonHamburger from '../08_Exercise(DOM).js';
import  ClockAlarm from '../09_Exercise(DOM).js';
import Shortcuts from '../10_Exercises(DOM).js';
import Ball from '../11_Exercises(DOM).js';

document.addEventListener('DOMContentLoaded', e=>{
    
    // ---------- Instance of Button Hamburger ----------
    const btn = new ButtonHamburger('.panel-btn', '.panel', '.menu a');
    btn.btnHamburger();

    // ---------- Instance of Reloj & Alarma ----------
    const clock = new ClockAlarm('.reloj');
    clock.digitalClock("#activar-reloj", "#desactivar-reloj");
    clock.alarm("#activar-alarma", "#desactivar-alarma", "./assets/sounds/Caprice24.mp3");

    
});

// Trabajar con el evento keydown es mas completo dado que reconoce todas las teclas 
// ATENCION !! NO USAR KEYPRESS
document.addEventListener('keydown', e=>{

    // ---------- Instance of Shortcuts ----------
    const keys = new Shortcuts();
    keys.comands(e);

    // ---------- Instance of Ball ----------
    const ball = new Ball('.stage', '.ball');
    ball.moveBall(e);

});