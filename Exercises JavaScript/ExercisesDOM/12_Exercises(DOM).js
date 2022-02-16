'use strict';

export default class Countdown{

    constructor(countdown){
        this.counter = document.querySelector(countdown);
    }

    countDown(date, message){

        // convertimos esa fecha a milisegundos para que sea mas sencillo el calculo del tiempo
        const countdownDate = new Date(date).getTime();
        
        let countdownTempo = setInterval(()=>{
            // Obtenemos el tiempo actual de nuestro sistema
            let now = new Date().getTime();

            // Restamos nuestro fecha introducido con nuestro tiempo actual para obtener el tiempo que falta
            let limitTime = countdownDate - now;
            let days, hours, minutes, seconds;

            days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
            hours =('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
            minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
            seconds = ('0' + Math.floor(limitTime % (1000 * 60) / 1000)).slice(-2);

            this.counter.innerHTML = `
            <h1>
                Faltan : ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos 
            </h1>`;

            if(limitTime < 0){
                clearInterval(countdownTempo);
                this.counter.innerHTML = `<h1>${message}</h1>`;
            }

        }, 1000);

    }

}
