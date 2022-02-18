'use strict';

// ---------- Imports ----------
import ButtonHamburger from '../08_Exercise(DOM).js';
import ClockAlarm from '../09_Exercise(DOM).js';
import Shortcuts from '../10_Exercise(DOM).js';
import Ball from '../11_Exercise(DOM).js';
import Countdown from '../12_Exercise(DOM).js';
import ScrollTopButton from '../13_Exercise(DOM).js';
import DarkTheme from '../14_Exercise(DOM).js';



document.addEventListener('DOMContentLoaded', e=>{
    
    // ---------- Instance of Button Hamburger ----------
    const btn = new ButtonHamburger('.panel-btn', '.panel', '.menu a');
    btn.btnHamburger();
    
    // ---------- Instance of Reloj & Alarma ----------
    const clock = new ClockAlarm('.reloj');
    clock.digitalClock("#activar-reloj", "#desactivar-reloj");
    clock.alarm("#activar-alarma", "#desactivar-alarma", "./assets/sounds/Caprice24.mp3");

    // ---------- Instance of Cuenta Regresiva ----------
    const count = new Countdown('.countdown');
    count.countDown("Feb 25, 2022 00:00:00", "Feliz Cumple Pragmatic Coder!!!");

    // ---------- Instance of ScrollTopButton ----------
    const topBtn = new ScrollTopButton('.scroll-top-btn');
    topBtn.scroll();
    topBtn.click();

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

// Sacamos nuestra instancia porqque trabajaremos con el mismo evento del DOM y no se puede hacer usar un evento del mismo tipo dentro de otro evento

// ---------- Instance of DarkTheme ----------
const darkTheme = new DarkTheme('.dark-theme-btn', 'dark-mode', 'dark-theme');
darkTheme.dark();