'use strict'

export default class ClockAlarm {

    // --------------- Reloj & Alarma ---------------
    constructor(clock){
        this.d = document;
        this.clock = clock;
    }

    digitalClock(btnPlay, btnStop){
        let catchClock;
        this.d.addEventListener('click', e =>{

            // Evento del Boton Play
            if(e.target.matches(btnPlay)){
                console.log(this.clock);

                catchClock = setInterval(()=>{
                    let clockHour = new Date().toLocaleTimeString();
                    this.d.querySelector(this.clock).innerHTML = `<h2>${clockHour}</h2>`;
                }, 1000);   

                // deshabilitamos el boton para que no nos genere otro evento
                e.target.disabled = true;
            }

            // Evento del Boton Stop
            if(e.target.matches(btnStop)){
                clearInterval(catchClock);
                this.d.querySelector(this.clock).innerHTML = null;
                // habilitamos el boton
                this.d.querySelector(btnPlay).disabled = false;
            }

        });
    }

    alarm(btnPlay, btnStop, sound){
        let catchAlarm;
        // Creamos una etiqueta de tipo audio para trabajar
        const $audio = this.d.createElement('audio');
        $audio.setAttribute('src', sound);

        this.d.addEventListener('click', e=>{

            // Evento del Boton Play
            if(e.target.matches(btnPlay)){
                catchAlarm = setTimeout(()=>{
                    $audio.play();
                },1);
                e.target.disabled = true;
            }

            // Evento del Boton S
            if(e.target.matches(btnStop)){
                clearTimeout(catchAlarm);
                $audio.pause();
                $audio.currentTime = 0;
                this.d.querySelector(btnPlay).disabled = false;
            }

        });
    }


}