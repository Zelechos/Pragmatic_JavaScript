'use strict'

export default class WebCam{

    // Aqui trabajamos con la camara web del navegador!!!
    
    constructor(id){
        this.d = document;
        this.w = window;
        this.n = navigator;
        this.video = document.getElementById(id);
    }


    action(){
        console.log(this.video);
        //Esta funcion es una promesa
        if(this.n.mediaDevices.getUserMedia){
            this.n.mediaDevices.getUserMedia({video: true, audio: false})
            .then(stream => {
                console.log(stream);
                this.video.srcObject = stream;
                this.video.play();
            })
            .catch(err => {
                this.video.insertAdjacentHTML("beforebegin", `<p>Error : ${err}</p>`);
                console.error(`Algo paso !!! ${err}`);
            });
        }
    }
}