'use strict'

export default class ScrollTopButton {

    constructor(top_buttom){
        this.d = document;
        this.w = window;
        this.btn = document.querySelector(top_buttom);
        this.classBtn = top_buttom;
    }
    
    scroll(){
        // Metodos para mostrar el avanze del scroll en Y de nuestro navegador
        // console.log(this.w.pageYOffset);
        // console.log(this.d.documentElement.scrollTop);
        this.w.addEventListener('scroll', e=>{
            const clone = this.btn.classList;
            (this.w.scrollY > 300)?clone.remove('hidden'):clone.add('hidden');
        })
    }

    click(){
        this.d.addEventListener('click', e=>{
            if(e.target.matches(`${this.classBtn} *`)){
                //metodo para cambiar la posicion del scroll NOTA (recibe un objeto)
                this.w.scrollTo({
                    behavior: 'smooth',//atributo para la velocidad de movimiento del scroll
                    top: 0, //con este atributo del objeto podemos decirle a que posicion queremos que se mueva el scroll
                    // left : 0, en caso que queramos que se mueva horizontalmente!!!!
                })
            }
        });
    }
}