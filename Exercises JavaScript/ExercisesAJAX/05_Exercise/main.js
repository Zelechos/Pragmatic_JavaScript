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

    xhr.open("POST", "./assets/uploader.php");
    // Dado que estamos enviando un formulario esto es para que reconozca no solo variables textuales tambien se le puede enviar archivos Binarias 
    xhr.setRequestHeader("enc-type", "multipart/form-data");

    // Le mandamos la variable formData porque ahi esta mi contenido
    xhr.send(formData);
}

const progressUpload = file =>{
    const $progress = d.createElement("progress");
    const $span = d.createElement("span");

    $progress.value = 0;
    $progress.max = 100;

    $main.insertAdjacentElement("beforeend", $progress);
    $main.insertAdjacentElement("beforeend", $span);

    // variable para detectar la cantidad de bits que se van cargando gracias a la clase FileReader() [LEER LA DOCUMENTACION DE ESTA CLASE Y ENTENDER SUS METODOS]
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // Evento para saber 
    fileReader.addEventListener("progress", e=>{
        let progress = parseInt((e.loaded*100)/e.total);
        $progress.value = progress;
        $span.innerHTML = `${progress}%  - ${file.name}`;
    });

    fileReader.addEventListener("loadend", e=>{
        uploader(file);
        setTimeout(()=>{
            $main.removeChild($progress);
            $main.removeChild($span);
            $files.value = "";
        },3000);
    });


}

d.addEventListener('change', e =>{
    if(e.target === $files){
        const files = Array.from(e.target.files);
        files.forEach(file => progressUpload(file));
    }
});