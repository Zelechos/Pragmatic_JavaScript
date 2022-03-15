'use strict';

export default class ValidationsForm{

    constructor(){
        this.form = document.querySelector('.contact-form');
        this.inputs = document.querySelectorAll('.contact-form [required]');
    }

    checkData(){
        
        this.inputs.forEach(input =>{
            const $span = document.createElement('span');
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement('afterend', $span);
        })

        document.addEventListener('keyup', e=>{

            if(e.target.matches(".contact-form [required]")){
                let $input = e.target;
                let pattern = $input.pattern || $input.dataset.pattern;

                // Validaciones del patron
                if(pattern && $input.value !== ""){
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value)
                    ? document.getElementById($input.name).classList.add('is-active')
                    : document.getElementById($input.name).classList.remove('is-active')
                }
                
                if(!pattern){
                    return $input.value === ""
                    ? document.getElementById($input.name).classList.add('is-active')
                    : document.getElementById($input.name).classList.remove('is-active');
                }
            }
        });

        document.addEventListener('submit', e=>{
            // e.preventDefault();
            let $loader = document.querySelector('.contact-form-loader');
            let $response = document.querySelector('.contact-form-response');

            // Removemos la class none para visualizar el loader
            $loader.classList.remove('none');

            setTimeout(()=>{
                $loader.classList.add('none');
                $response.classList.remove('none');
                this.form.reset();

                setTimeout(()=>$response.classList.add('none'),3000);
            },3000);


            
        });

    }
}

