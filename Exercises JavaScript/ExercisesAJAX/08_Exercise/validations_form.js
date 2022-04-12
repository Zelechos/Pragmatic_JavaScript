'use strict';
const d = document;

function contactForm(){

        const $form = document.querySelector('.contact-form');
        const $inputs = document.querySelectorAll('.contact-form [required]');

        $inputs.forEach(input =>{
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
            e.preventDefault();
            let $loader = document.querySelector('.contact-form-loader');
            let $response = document.querySelector('.contact-form-response');
            
            // Removemos la class none para visualizar el loader
            $loader.classList.remove('none');
            
            fetch("./assets/send_email.php", {
                method: "POST",
                body: new FormData(e.target),
                mode: "cors"//se pone por politicas de CORS LEER SOBRE ESTE TEMA
                })
                .then(response => response.ok ? response.json(): Promise.reject(response))
                .then(json =>{
                    // console.log(json);
                    $loader.classList.add('none');
                    $response.classList.remove('none');
                    $response.innerHTML = `${json.message}`; 
                    $form.reset();
                })
                .catch(error =>{
                    // console.log(error);
                    let message = error.statusText || "Ocurrio un error al enviar la informacion!!";
                    $response.innerHTML = `Error ${error.status} : ${message}`; 
                })
                .finally(()=>{
                    setTimeout(()=>{
                        $response.classList.add('none')
                        $response.innerHTML = "";
                    }, 3000);
                });
        });

}
// Ejecutamos la subturina contactForm(); en la carga del documento
d.addEventListener("DOMContentLoaded", contactForm);

