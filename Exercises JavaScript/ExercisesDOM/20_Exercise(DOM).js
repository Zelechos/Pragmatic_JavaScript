'use strict'
// Investigar mas!!! ir a la documentacion 
export default class GeolocationNow{

    constructor(id){
        this.d = document;
        this.n = navigator;
        this.geolocationDiv = document.getElementById(id);
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
    }

    location(){

        // Funcion para obtener la posicion
        const success = (position)=>{
            this.geolocationDiv.innerHTML = `
            <h3>Tu posicion actual es </h3>
            <p>latitud : ${position.coords.latitude}</p>
            <p>longitud : ${position.coords.longitude}</p>
            <p>precision : ${position.coords.accuracy} metros</p>
            <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},21z" target="_blank" rel="noopener">
                Ver en google maps
            </a>
            `;
        }

        // Funcion para devolvernos el error
        const error = (bug)=>{
            this.geolocationDiv.innerHTML = `<p>code error => ${bug.code} :  message => ${bug.message}</p>`;
            console.error(`code error => ${bug.code} \n message => ${bug.message}`);
        }

        console.log(this.geolocationDiv);
        this.n.geolocation.getCurrentPosition(success, error, this.options);
    }

    /* 
        el metodo getCurrentPosition() de geolocation requiere de dos funciones de tipo callbacks las cuales le pasaremos como parametros
        
        - funcion que nos returne la posicion en case de exito
        - y otra funcion que nos returne el error en caso de que haya salido algo mal
    */

}