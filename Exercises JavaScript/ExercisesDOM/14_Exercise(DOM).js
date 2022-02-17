'use strict'
export default class DarkTheme{

    // --------------- Dark Theme ==> Tema Oscuro ---------------

    constructor(btn, classDark, classDarkTheme){
        this.d = document;
        this.classBtn = btn;
        this.classDark = classDark;
        this.classDarkTheme = classDarkTheme;
        this.btn = document.querySelector(btn);
        this.selectors = document.querySelectorAll('[data-dark]');
        this.selectorsTheme = document.querySelectorAll('[data-darkTheme]');
    }

    dark(){
        this.d.addEventListener('click', e=>{
            if(e.target.matches(`${this.classBtn}`)){
                this.changeImg(this.btn.classList);
                this.changeTheme(this.selectors, this.selectorsTheme);
            }
        });
    }

    // Funcion para cambiar la imagen 
    changeImg(list){
        (list.contains('moon'))?list.replace('moon','sun'):list.replace('sun','moon');
    }

    changeTheme(selectors, selectorsTheme){
        selectors.forEach( selector => selector.classList.toggle(this.classDark));
        selectorsTheme.forEach( selector => selector.classList.toggle(this.classDarkTheme));
    }
}

    // Funcion para cambiar nuestro archivos css ATENCION(funcion inestable debido a la posiicon de las etiquetas html RAROOO)
    // changeStyles(route){
    //     console.log(this.d.head.querySelector("link"));
        
    //     let documentLink = this.d.head.querySelector("link");
    //     (route === "./css/exercises.css")
    //         ?documentLink.setAttribute("href","./css/dark-theme.css")
    //         :documentLink.setAttribute("href","./css/exercises.css");
    // }
