'use strict';

export default class ResponsiveTester{

    constructor(form){
        this.d = document;
        this.w = window;
        this.classForm = form;
        this.form = document.getElementById(form);
    }

    tester(){
        let myWindow;
        this.d.addEventListener('submit', e=> {
            if(e.target.matches(this.classForm)){
                e.preventDefault();
                myWindow = window.open(this.form.url.value,
                "myWindow",
                `innerWidth=${this.form.width.value},innerHeight=${this.form.height.value}`);

                // Manera de traer el valor de los inputs mediante el name con js
                // console.log(this.form.url.value);
                // console.log(this.form.width.value);
                // console.log(this.form.height.value);
            }
        });
        
        this.d.addEventListener('click', e=>{
            if(e.target === this.form.close)myWindow.close();
        });
    }
}