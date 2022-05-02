'use strict';

export function ContactForm(){
    const d = document;
    const $styles = d.getElementById('dynamic-styles');
    const $form = d.createElement('form');
    $form.classList.add('contact-form');

    // Single File Component
    $styles.innerHTML = `
    .contact-form{
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    
    .contact-form > *{
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        border-radius: 10px;
        width: 100%;
    }
    
    .contact-form textarea{
        resize: none;
    }
    
    .contact-form legend,
    .contact-form-response{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    } 
    
    .contact-form input,
    .contact-form textarea{
        font-size: 1rem;
        font-family: sans-serif;
    }
    
    .contact-form input[type="submit"]{
        width: 50%;
        cursor: pointer;
        background-color: white;
    }
    
    .contact-form *::placeholder{
        color: #161b22;
    }
    
    .contact-form [required]:valid{
        border: thin solid var(--form-ok-color)
    }
    
    .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }
    
    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }
    
    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    
    .contact-form-loader{
        text-align: center;
    }
    
    .none{
        display: none;
    }
    
    @keyframes show-message{
        0%{
            visibility: hidden;
            opacity: 0;
        }
    
        100%{
            visibility: visible;
            opacity: 1;
        }
    }
    `;
    
    $form.innerHTML = `
    <legend>Envianos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input type="email" name="email" placeholder="Escribe tu email" title="Email Incorrecto!!" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" title="Tu comentario no debe exceder los 255 caracteres!!!" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Enviar">
    
    <!-- Loader se envio -->
    <div class="contact-form-loader none">
        <img src="./app/assets/img/rings.svg" alt="Cargando">
    </div>

    <!-- Respuesta al enviar los datos del formulario -->
    <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
    </div>
    `;

    function validationsForm(){

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
                
                fetch("https://formsubmit.co/ajax/zelechos9@gmail.com", {
                    method: "POST",
                    body: new FormData(e.target)
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

    // Para Ejecutar la validaciones 1 segundo despues de la insercion del formulario
    setTimeout(()=>validationsForm(), 500);
    
    return $form;
}
