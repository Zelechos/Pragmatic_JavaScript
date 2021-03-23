'use strict'
window.addEventListener('load', ()=>{
    
    function Intervalo(){
        var Tiempo = setInterval(
            ()=>{
                console.log('setInterval Activado');
                
                var escavezado = document.querySelector('h1');
                
                if (escavezado.style.fontSize == "50px"){
                    escavezado.style.fontSize = "100px";
                }else{
                    escavezado.style.fontSize = "50px";                
                }
            
            }
            , 1000
        );
    return Tiempo;
    }

    var Time = Intervalo();
    var stop = document.querySelector('#stop');

    stop.addEventListener('click'
    ,()=>{
            console.log('Acabas de ser el Primer humano en detener el Tiempo');
            clearInterval(Time);//para detener el setInterval
    }
    );

    var start = document.querySelector('#start');
    start.addEventListener('click'
    ,()=>{
        Intervalo();
    }
    );
});