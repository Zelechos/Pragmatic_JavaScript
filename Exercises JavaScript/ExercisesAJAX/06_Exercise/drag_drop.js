// 'use strict'

const d = document;
const $main = d.querySelector("main");
const $dropZone = d.querySelector(".drop-zone");

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
        },3000);
    });
}

    // eventos para habilitar la accion del drag and drop para lectura de archivos
    // LEER SOBRE LA API DE DRAG AND DROP !!!!!!

    // evento para cuando se inserta el archivo a la zona del drag and drop
    $dropZone.addEventListener('dragover',e=>{
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.add("is-active");
    });

    // evento para cuando se dejas la zona del drag and drop
    $dropZone.addEventListener('dragleave',e=>{
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.remove("is-active");
    });

    // evento para cuando se suelta en la zona del drag and drop el archivo
    $dropZone.addEventListener('drop',e=>{
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
        // Accedemos a los archivos que soltamos en el darg and drop 
        const files = Array.from(e.dataTransfer.files);
        files.forEach(file => progressUpload(file));
        e.target.classList.remove("is-active");

    }); 
