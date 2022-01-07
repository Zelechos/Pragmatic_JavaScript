'use strict'

let form = document.querySelector('#formulario');

form.addEventListener("submit",
    ()=>{
        let Pelicula =  document.querySelector('#addPelicula').value;
        if(Pelicula.length <= 0){
            console.log('No Se Agrego nada al Local Storage');
        }else{
            localStorage.setItem(Pelicula , Pelicula);
        }
});

let limpio = document.querySelector('#clean');

limpio.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
});

let ul = document.querySelector('#here-list');
for(let index in localStorage){

    if (typeof localStorage[index] == 'string'){
        let li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
    
}


let form_delete = document.querySelector('#formularioDelete');

form_delete.addEventListener("submit",
    ()=>{
        let DeletePeli = document.querySelector('#deletePelicula').value;
            if(DeletePeli.length >= 1){
                localStorage.removeItem(DeletePeli);
            }
});