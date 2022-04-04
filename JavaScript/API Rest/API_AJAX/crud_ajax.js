
const d = document;

d.addEventListener('DOMContentLoaded', e=>{

    const $table = d.querySelector('.crud-table');
    const $form = d.querySelector('.crud-form');
    const $title = d.querySelector('.crud-title');
    const $template = d.getElementById('crud-template').content;
    const $fragment = d.createDocumentFragment();

    // Subrutina para usar ajax
    const ajax = options =>{
        let {url, method, success, error, data} = options;

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e =>{

            if(xhr.readyState !== 4)return;

            if(xhr.status>= 200 && xhr.status < 300){

                let json = JSON.parse(xhr.statusText);
                success(json);
            }else{
                let message = xhr.statusText || `<h2> Error : ${xhr.status} - Ocurrio un error !!!</h2>`
                error(message);
            }

        });

        xhr.open(method || "GET", url);

        // Creamos la cabezera de la peticion (si nuestra peticion no tiene cabezera el JSON - server no funciona)
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

        xhr.send(JSON.stringify(data));
    }

});


