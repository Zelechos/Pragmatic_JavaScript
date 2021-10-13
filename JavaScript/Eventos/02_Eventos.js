'use strict'
window.addEventListener('load', ()=>{
    
    function Intervalo(){
        let Tiempo = setInterval(()=>{
                console.log('setInterval Activado');
                
                let header = document.querySelector('h1');
                let headerScript = header.style.fontSize;
                
                if (headerScript == "50px"){
                    headerScript = "100px";
                }else{
                    headerScript = "50px";                
                }
        } , 1000);
        return Tiempo;
    }

    let Time = Intervalo();
    let stop = document.querySelector('#stop');

    stop.addEventListener('click',()=>{
        console.log('Acabas de ser el Primer humano en detener el Tiempo');
        clearInterval(Time);//para detener el setInterval
    });

    let start = document.querySelector('#start');
    start.addEventListener('click' ,()=>{
        Intervalo();
    });
    
});