const d = document;
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

            if(xhr.status >= 200 && xhr.status < 300){
                let json = JSON.parse(xhr.responseText);
                success(json);
            }else{
                let message = xhr.statusText || `Error : ${xhr.status} - Ocurrio un error !!!`
                console.warn(message);
                error(message);
            }

        });

        xhr.open(method || "GET", url);
        
        // Creamos la cabezera de la peticion (si nuestra peticion no tiene cabezera el JSON - server no funciona)
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        
        xhr.send(JSON.stringify(data));
    }
    
    const getAllProgrammers = ()=>{

        ajax({
            url: "http://localhost:5001/prog0rammers/",
            success : response =>{
                console.log(response);
            },
            error : message => {
                console.log(message);
                let p = `<p>${message}</p>`
                $table.insertAdjacentHTML("afterend", p);
            }
        });
    }
    
d.addEventListener('DOMContentLoaded', getAllProgrammers);
