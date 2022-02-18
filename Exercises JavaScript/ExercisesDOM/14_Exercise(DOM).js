'use strict'
export default class DarkTheme{

    // --------------- Dark Theme ==> Tema Oscuro ---------------

    constructor(btn, classDark, classDarkTheme){
        this.d = document;
        this.classBtn = btn;
        this.ls = localStorage; // Creamos esta varible para resumir la instaancia nada mas
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
                this.changeState(this.ls.getItem("theme"));
            }
        });

        // ESTUDIARRRRR MASSSSS !!!!!!!!!!!!!!
        // Muy Importante aqui Trabajamos la Persistencia de el Dark Mode con en LocalStorage IMPORTANTE!!!!
        this.d.addEventListener('DOMContentLoaded', e=>{
            if(this.ls.getItem("theme") === null ) this.ls.setItem('theme',"light");           

            if(this.ls.getItem("theme") === "dark"){
                this.changeImg(this.btn.classList);
                this.changeTheme(this.selectors, this.selectorsTheme);
            }
        });
    }
    
    // Para controlar el estado del mi local Storage IMPORTATE!!!!!
    changeState(state){
        (state === "light")?this.ls.setItem('theme',"dark"):this.ls.setItem('theme',"light");
    }

    // Funcion para cambiar la imagen 
    changeImg(list){
        (list.contains('moon'))?list.replace('moon','sun'):list.replace('sun','moon');
    }

    // Cambia los colores y los temas de la web 
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
