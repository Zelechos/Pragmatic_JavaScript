'use strict';

export default class Shortcuts{

    // --------------- Shortcuts ==> Atajos de Teclado ---------------
    constructor(){
        this.d = document;
        this.button = document.querySelector(".panel-btn");
    }

    comands(event){
        // console.log(event.key);
        // console.log(event.keyCode);
        // console.log(event.type);

        if(event.altKey){
            if(event.keyCode === 65){
                alert('Activaste un Alert con => Alt + a');
            }

            if(event.keyCode === 67){
                confirm('Activaste un Comfirm con => Alt + c ?');
            }

            if(event.keyCode === 80){
                prompt('Activaste un Prompt con => Alt + p ?');
            }

            if(event.keyCode === 66){   
                this.button.click();
            }
        }


    }



}

