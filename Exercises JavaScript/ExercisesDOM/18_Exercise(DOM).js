'use strict'

export default class WifiConnection{

    constructor(header){
        this.d = document;
        this.w = window;
        this.container = document.querySelector(header);
        this.onlineContent = `<div class="connected"><h1>Conectado a la Red</h1></div>`;
        this.oflineContent = `<div class="disconnected"><h1>Error en la conexion Wifi</h1></div>`;
        this.defect = `<h1>DOM Exercises in Javascript</h1>`;
    }

    connectionChecker(){
        this.w.addEventListener('online', (e)=>this.isLineWeb());
        this.w.addEventListener('offline',(e)=>this.isLineWeb());
    }

    isLineWeb(){
        if(navigator.onLine) {
            this.container.innerHTML += this.onlineContent;
            setTimeout(()=>{
                this.container.innerHTML ="";
                this.container.innerHTML += this.defect;
            },3000)
            console.log("en linea");
        } else {
            this.container.innerHTML += this.oflineContent;
            setTimeout(()=>{
                this.container.innerHTML ="";
                this.container.innerHTML += this.defect;
            },3000)
            console.error("fuera de linea");
        }
    }

    
}

