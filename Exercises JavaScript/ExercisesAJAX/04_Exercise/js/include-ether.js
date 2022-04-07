'use strict';
// Libreria para Incluir codigo HTML dinamicamente por componente con js 
document.addEventListener('DOMContentLoaded', e=>{

    const includeEther = (code, url)=>{
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', e=>{
        
            if(xhr.readyState !== 4)return;
        
            if(xhr.status >= 200 && xhr.status < 300){
                code.outerHTML = xhr.responseText;
            }else{
                let message = `Error : ${xhr.status} - Ocurrio un error !!!`
                code.outerHTML = `<h1>${message}</h1>`
            }
        });
        
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-Type", "text/html charset=utf-8")
        xhr.send();
    }
    
    document.querySelectorAll("[data-ether]").forEach(label => includeEther(label, label.getAttribute("data-ether")));
});
