'use strict'

export default class WifiConnection{

    constructor(){
        this.d = document;
        this.w = window;
        this.n = navigator;
    }

    connectionChecker(){
        this.w.addEventListener('online', (e)=>this.isLineWeb());
        this.w.addEventListener('offline',(e)=>this.isLineWeb());
    }

    isLineWeb(){

        const $div = document.createElement('div');
        const $message = document.createElement('h1');

        if(this.n.onLine) {
            $div.classList.add('connected');
            $div.classList.remove('disconnected');
            $message.textContent = 'Conectado a la Red';
            $div.appendChild($message);
            console.log("en linea");
        } else {
            $div.classList.add('disconnected');
            $div.classList.remove('connected');
            $message.textContent = 'Error en la conexion Wifi';
            $div.appendChild($message);
            console.error("fuera de linea");
        }

        this.d.body.prepend($div);
        setTimeout(()=>this.d.body.removeChild($div),3000);

    }

    
}

