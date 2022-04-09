// 'use strict'

const d = document;
const $main = d.querySelector("main");
const $files = d.getElementById("files");

const uploader = file =>{
    console.log(file);
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    xhr.addEventListener('readystatechange', e=>{

        if(xhr.readyState !== 4)return;

        if(xhr.status >= 200 && xhr.status < 300){
            console.log(xhr.responseText);
        }else{
            let message = xhr.statusText || "Ocurrio un error";
            console.error(`Error ${xhr.status} : ${message}`);
        }
    });

    xhr.open("POST", "../assets/uploader.php");
    // Dado que estamos enviando un formulario esto es para que reconozca no solo variables textuales tambien se le puede enviar archivos Binarias 
    xhr.setRequestHeader("enc-type", "multipart/form-data");

    // Le mandamos la variable formData porque ahi esta mi contenido
    xhr.send(formData);
}

d.addEventListener('change', e =>{
    if(e.target === $files){
        const files = Array.from(e.target.files);
        files.forEach(file => uploader(file));
    }
});