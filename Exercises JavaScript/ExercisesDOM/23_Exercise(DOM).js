'use strict';

export default class Slider{

    constructor(){
        this.d = document;
        this.prev = this.d.querySelector('.slider-btns .prev');
        this.next = this.d.querySelector('.slider-btns .next');
        this.slides = this.d.querySelectorAll('.slider-slide');
    }

    move(){

        let counter = 0;
        this.d.addEventListener('click', e=>{
            
            // Boton para retroceder
            if(e.target === this.prev){
                e.preventDefault();
                this.slides[counter].classList.remove('active');
                counter--;
                if(counter < 0){
                    counter = this.slides.length -1
                }
                this.slides[counter].classList.add('active');
            }

            // Boton para avanzar
            if(e.target === this.next){
                e.preventDefault();
                this.slides[counter].classList.remove('active');
                counter++;
                if(counter >= this.slides.length){
                    counter = 0;
                }
                this.slides[counter].classList.add('active');
            }

        });
    }

    


}

