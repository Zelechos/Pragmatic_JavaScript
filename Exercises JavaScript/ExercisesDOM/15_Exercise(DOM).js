'use strict'

export default class ResponsibleJs {

    // --------------- Responsible Responsive Design ==> Diseño Responsivo Responsable ---------------

    constructor() {
        this.d = document;
        this.w = window;
    }
    
    responsible(id, mq, mobileContent, desktopContent){

        let mediaQuery = this.w.matchMedia(mq);

        const responsive = e => {

            if(e.matches){
                this.d.getElementById(id).innerHTML = desktopContent;
            }else{
                this.d.getElementById(id).innerHTML = mobileContent;
            }
        }

        mediaQuery.addListener(responsive);
        responsive(mediaQuery);
    }

}


// Mi Funcion custom pero tiene algunos problemas y falta algo de trabajo 
// response (template){
//     const querys = '(min-width: 1020px)';

//     const $template = document.getElementById(template).content;
//     const $link = $template.querySelector('#link');
//     const $iframe = $template.querySelector('#iframe');

//     this.w.addEventListener('resize', e=>{

//         if(this.w.matchMedia(querys).matches){
//             this.media.innerHTML = '';
//             this.media.appendChild($iframe) 
//         }else{
//             this.media.innerHTML = '';
//             this.media.appendChild($link);
//         }
        
//     });
// }