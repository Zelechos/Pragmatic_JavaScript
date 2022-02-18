'use strict'

export default class WebCam{

    constructor(id){
        this.d = document;
        this.w = window;
        this.n = navigator;
        this.video = document.getElementById(id);
    }


    action(){
        console.log(this.video);

        if(this.n.mediaDevices.getUserMedia){
            this.n.mediaDevices.getUserMedia({//Esta funcion es una promesa
                video: true,
                audio: true,
            })
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