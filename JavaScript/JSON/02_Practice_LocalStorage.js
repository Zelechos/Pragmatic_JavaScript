'use strict'

var form = document.querySelector('#formulario');

form.addEventListener("submit",
    ()=>{
        var Pelicula =  document.querySelector('#addPelicula').value;
        if(Pelicula.length <= 0){
            console.log('No Se Agrego nada al Local Storage');
        }else{
            localStorage.setItem(Pelicula , Pelicula);
        }
});

var limpio = document.querySelector('#clean');

limpio.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
});

var ul = document.querySelector('#here-list');
for(var index in localStorage){

    if (typeof localStorage[index] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
    
}


var form_delete = document.querySelector('#formularioDelete');

form_delete.addEventListener("submit",
    ()=>{
        var DeletePeli = document.querySelector('#deletePelicula').value;
            if(DeletePeli.length >= 1){
                localStorage.removeItem(DeletePeli);
            }
});