'use strict';

export default class ScrollSpy{

    constructor(){
        this.sections = document.querySelectorAll('section[data-scroll-spy]');
        this.observer = new IntersectionObserver(this.callback, {
            //rootMargin: "-250px", //con este atributo puedes reducir o aumentar el tamaño o reconocimiento del IntersectionObserver
            // threshold sirve para que cuando alguno de las secciones llegue al 50% (0.5) el IntersectionObserverlo reconozca
            threshold: [0.5, 0.75],// entre 50% y 75%

        });
    }

    recognize(){
        this.sections.forEach(section => this.observer.observe(section));
    }

    callback(entries){
        console.log(`entries =>`,entries);

        entries.forEach(entry =>{
            // console.log("entry", entry);
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            }else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        })
    }
}