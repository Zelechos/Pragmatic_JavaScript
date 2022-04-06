
const d = document;


const $table = d.querySelector('.crud-table');
const $form = d.querySelector('.crud-form');
const $title = d.querySelector('.crud-title');
const $template = d.getElementById('crud-template').content;
const $fragment = d.createDocumentFragment();

const getAllProgrammers = async ()=>{

    try{
        let response = await fetch("http://localhost:5001/programmers/");//por defecto manda la peticion con el metodo GET
        let json = await response.json();

        if(!response.ok) throw {status : `Error : ${response.status} Algo salio mal!!!`};

        json.forEach(programmer =>{
            $template.querySelector(".name").textContent = programmer.name;
            $template.querySelector(".profession").textContent = programmer.profession;
            // Creamos los data atribute para editar y eliminar los elementos con respecto al {id}
                // - Para el boton de editar nos importa obtener todos los datos mediante los data-attributes para poder modificarlos    
            $template.querySelector('.edit').dataset.id = programmer.id;
            $template.querySelector('.edit').dataset.name = programmer.name;
            $template.querySelector('.edit').dataset.profession = programmer.profession;
            //- Sin Embargo para eliminar los datos solo necesitamos el id
            $template.querySelector('.delete').dataset.id = programmer.id;
            // Este es un agregado para el mensaje de confirmacion para eliminar
            $template.querySelector('.delete').dataset.name = programmer.name;
            
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        
        $table.querySelector('tbody').appendChild($fragment);
        
    }catch(error){
        console.error(error.status);
        $table.insertAdjacentHTML("afterend", `<p>${error.status}</p>`)
    }finally{
        console.warn("requests completed!");
    }
}
    
    
d.addEventListener('DOMContentLoaded', getAllProgrammers);

// nuestro evento tiene que ser asincrono dado el async await que estamos usando para hacer las peticiones a la API
d.addEventListener('submit', async (e) =>{

    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //Create => POST
            try {
                let options = {
                    method : "POST", 
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({
                        name : e.target.name.value,
                        profession : e.target.profession.value
                    })
                }
                let response = await fetch("http://localhost:5001/programmers/", options);
                
                if(!response.ok) throw {status : `Error : ${response.status} Algo salio mal!!!`};
                
                location.reload();
            } catch (error) {
                $form.insertAdjacentHTML("afterend", `<p>${error.status}</p>`)
            }

        }else{
            //Update => PUT
            try {
                let options = {
                    method : "PUT", 
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({
                        id : e.target.id.value,
                        name : e.target.name.value,
                        profession : e.target.profession.value
                    })
                }
                let response = await fetch(`http://localhost:5001/programmers/${e.target.id.value}`, options);
                
                if(!response.ok) throw {status : `Error : ${response.status} Algo salio mal!!!`};
                
                location.reload();
            } catch (error) {
                $form.insertAdjacentHTML("afterend", `<p>${error.status}</p>`)
            }

        }
    }
});


d.addEventListener('click', async (e)=>{
    if(e.target.matches('.edit')){
        $form.name.value = e.target.dataset.name;
        $form.profession.value = e.target.dataset.profession;
        $form.id.value = e.target.dataset.id;
        $title.textContent = "Edit Programmer";
    }

    if(e.target.matches('.delete')){
        let question = confirm(`Are you sure to remove the programmer ${e.target.dataset.name} ? `);
        if(question){
            try {
                let options = {
                    method : "DELETE", 
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    }
                }
                
                let response = await fetch(`http://localhost:5001/programmers/${e.target.dataset.id}`, options);
                
                if(!response.ok) throw {status : `Error : ${response.status} Algo salio mal!!!`};
                
                location.reload();
            } catch (error) {
                $form.insertAdjacentHTML("afterend", `<p>${error.status}</p>`)
            }
        }
    }

});

