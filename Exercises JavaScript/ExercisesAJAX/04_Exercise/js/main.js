'use strict';

// --------- Constantes ---------
const d = document;
const $main = d.querySelector('main');

// Subrutina para obtener todo el contenido html
const getHtml = (options)=>{
    let {url, success, error } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', e=>{
        if(xhr.readyState !== 4)return;
        if(xhr.status >= 200 && xhr.status < 300){
            let data = xhr.responseText;
            success(data);
        }else{
            let message = `Error : ${xhr.status} - Ocurrio un error !!!`
            error(message);
        }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "text/html charset=utf-8")
    xhr.send();
}


// Evento para cuando inicia la pagina llame a la ruta home.html
d.addEventListener('DOMContentLoaded', e =>{
    getHtml({
        url: "./routes/home.html",
        success: (code)=> $main.innerHTML = code,
        error: (err)=> $main.innerHTML = `<h1>${err}</h1>`,
    });
});

d.addEventListener('click', e=>{

        if(e.target.matches(".menu a")){
            e.preventDefault();
            getHtml({
                url: e.target.href,
                success: (code)=> $main.innerHTML = code,
                error: (err)=> $main.innerHTML = `<h1>${err}</h1>`,
            });
        }


});
    




