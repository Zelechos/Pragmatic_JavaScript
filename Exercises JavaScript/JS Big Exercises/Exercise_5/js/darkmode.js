'use strict'

window.addEventListener('load', ()=>{
    darkMode();    
});

const darkMode = ()=>{
    const $button = document.querySelector('#checkbox');
    const $ball = document.querySelector(".ball");
    const $body = document.body;
    
    $button.addEventListener('click', ()=>{
        $body.classList.toggle("dark");
        $ball.classList.toggle("darkball");
    });
}
