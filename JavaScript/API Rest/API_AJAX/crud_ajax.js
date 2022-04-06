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
                let message = `Error : ${xhr.status} - Ocurrio un error !!!`
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
            url: "http://localhost:5001/programmers/",
            success : response =>{
                response.forEach(programmer =>{
                    $template.querySelector('.name').textContent = programmer.name;
                    $template.querySelector('.profession').textContent = programmer.profession;
                // Creamos los data atribute para editar y eliminar los elementos con respecto al {id}
                    // - Para el boton de editar nos importa obtener todos los datos mediante los data-attributes para poder modificarlos    
                    $template.querySelector('.edit').dataset.id = programmer.id;
                    $template.querySelector('.edit').dataset.name = programmer.name;
                    $template.querySelector('.edit').dataset.profession = programmer.profession;

                    //- Sin Embargo para eliminar los datos solo necesitamos el id
                    $template.querySelector('.delete').dataset.id = programmer.id;
                    
                    let $clone = d.importNode($template, true);
                    $fragment.appendChild($clone);
                });

                $table.querySelector("tbody").appendChild($fragment);
            },
            error : message => {
                let p = `<p>${message}</p>`
                $table.insertAdjacentHTML("afterend", p);
            }
        });
    }
    
d.addEventListener('DOMContentLoaded', getAllProgrammers);
