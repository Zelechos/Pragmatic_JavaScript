'use strict';

// ---------- Imports ----------
import ButtonHamburger from '../08_Exercise(DOM).js';
import ClockAlarm from '../09_Exercise(DOM).js';
import Shortcuts from '../10_Exercise(DOM).js';
import Ball from '../11_Exercise(DOM).js';
import Countdown from '../12_Exercise(DOM).js';
import ScrollTopButton from '../13_Exercise(DOM).js';
import DarkTheme from '../14_Exercise(DOM).js';
import ResponsibleJs from '../15_Exercise(DOM).js';
import ResponsiveTester from '../16_Exercise(DOM).js';
import UserDeviceInfo from '../17_Exercise(DOM).js';
import WifiConnection from '../18_Exercise(DOM).js';
import WebCam from '../19_Exercise(DOM).js';
import GeolocationNow from '../20_Exercise(DOM).js';


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

    // ---------- Instance of ResponsibleJs ----------
    const responsive = new ResponsibleJs();

    // Creamos las variables y contenidos de escritorio
    let desktopYoutube = `
    <iframe width="960" height="415" src="https://www.youtube.com/embed/M5QY2_8704o" id="iframe"></iframe>
    `;
    let mobileYoutube = `
    <a href="https://www.youtube.com/watch?v=M5QY2_8704o&t=2151s" target="_blank" id="link">Link Aqui</a>
    `;

    let desktopMaps = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276845!2d-58.383759084776386!3d-34.60373888045951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sbo!4v1645152022969!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `;
    let mobileMaps = `
    <a href="https://goo.gl/maps/XqMMitNWGkPvMYoQA" target="_blank" id="link">Link Aqui</a>
    `;

    // Youtube
    responsive.responsible('youtube', '(min-width: 1024px)', mobileYoutube, desktopYoutube);

    // Google maps
    responsive.responsible('gmaps', '(min-width: 1024px)', mobileMaps, desktopMaps);

    // ---------- Instance of ResponsibleJs ----------

    const responsiveTester = new ResponsiveTester('form');
    responsiveTester.tester();

    // ---------- Instance of UserDeviceInfo ----------

    const info = new UserDeviceInfo('user-device');
    info.detectionDevices();

    // ---------- Instance of WebCam ----------
    
    const video = new WebCam('webcam');
    video.action();

    // ---------- Instance of GeolocationNow ----------

    const geo = new GeolocationNow('geolocation');
    geo.location();

    
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

// ============================ Instancias que no necesitan eventos ============================

// Sacamos nuestra instancia porque trabajaremos con el mismo evento del DOM y no se puede hacer usar un evento del mismo tipo dentro de otro evento

// ---------- Instance of DarkTheme ----------
const darkTheme = new DarkTheme('.dark-theme-btn', 'dark-mode', 'dark-theme');
darkTheme.dark();


// Dado que tenemos un eventos de conexion de red el cual no tiene necesidad de esperar que el documento cargue
// ---------- Instance of WifiConnection ----------
const connection = new WifiConnection();
connection.connectionChecker();