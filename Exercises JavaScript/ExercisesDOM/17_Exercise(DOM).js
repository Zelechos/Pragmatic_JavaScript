'use strict'

export default class UserDeviceInfo{

    constructor(id){
        this.d = document;
        this.n = navigator;
        this.ua = navigator.userAgent;
        this.userContent = document.getElementById(id);
    }

    detectionDevices(){
        // Objetos para los reconocimientos de dispositivos (validaciones y funciones, etc)

        // Para Reconocimiento de Celulares
        const isMobile = {
            android : ()=>this.ua.match(/android/i),
            ios : ()=>this.ua.match(/iphone|ipad|ipod/i),
            windows : ()=>this.ua.match(/windows phone/i),
            any : function(){
                return this.android() || this.ios() || this.windows();
            },
        };

        // Para Reconocimiento de Sistema Operativo
        const isDesktop = {
            linux : ()=> this.ua.match(/linux/i),
            mac : ()=> this.ua.match(/mac os/i),
            windows : ()=> this.ua.match(/windows nt/i),
            any: function(){
                return this.linux() || this.mac() || this.windows();
            },
        };

        // Para Reconocimiento de Navegador
        const isBrowser = {
            chrome: ()=> this.ua.match(/chrome/i),
            safari: ()=> this.ua.match(/safari/i),
            firefox: ()=> this.ua.match(/firefox/i),
            opera: ()=> this.ua.match(/opera|opera mini/i),
            ie: ()=> this.ua.match(/msie|iemobile/i),
            edge: ()=> this.ua.match(/edge/i),
            any: function(){
                return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
            },
        };

        // Mobile validaciones
        console.warn(isMobile.ios());

        // Desktop validaciones
        console.warn(isDesktop.windows());
        console.warn(isDesktop.linux());
        console.warn(isDesktop.any());

        // Navegador validfaciones
        console.warn(isBrowser.chrome());
        console.warn(isBrowser.any());

        let contentToWeb =  `
        <ul>
            <li>User Agent (Especificaciones del Usuario) : <b>${this.ua}</b></li>
            <li>Plataforma (S.O.) : <b>${isMobile.any()?isMobile.any()[0]:isDesktop.any()[0]}</b></li>
            <li>Navegador : <b>${isBrowser.any()[0]}</b></li>
        </ul>

        `;

        this.userContent.innerHTML = contentToWeb;

        // Contenido exclusivo dependiendo las especificaciones del usuario
        if(isBrowser.chrome()){
            this.userContent.innerHTML += `<h1>No te cansas de los anuncios de google descargate otro navegador ya!!!</h1>`;
        }

        if(isMobile.android()){
            this.userContent.innerHTML += `<h1>enserio no tienes un Iphone en 2022 comprate uno miserable haha!!!</h1>`;
        }

        if(isMobile.ios()){
            this.userContent.innerHTML += `<h1>eres muy fresa usa linux !!!</h1>`;
        }

        if(isDesktop.windows()){
            this.userContent.innerHTML += `<h1>Me estas diciendo que enserio no tienes instalado Linux y te dices programador?</h1>`;
        }

        // Tambien podemos hacer Redirecciones a otra version de nuestro sitio web dependiendo el dispositivo
        if(isMobile.android()){
            window.location.href = "https://github.com/Zelechos";
        }

        if(isMobile.ios()){
            location.href = "https://zelechos.github.io/PragmaticCoder/";
        }

    }


}