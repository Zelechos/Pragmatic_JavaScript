(()=>{
    // Instaciamos un objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    const $list = document.getElementById('xhr');
    const $fragment = document.createDocumentFragment();

    // Se activa el evento cuando ocurra un cambio de estado 
    xhr.addEventListener('readystatechange', e=>{

        
        // Mecanismo para saber si el estado ya ha sido completado 
        if(xhr.readyState !== 4)return;
        
        
        // Validacion mediante el codigo de respuesta de nuestra peticion
        if(xhr.status >= 200 && xhr.status < 300){
            console.warn(`Conexion existosa => ${xhr.status}`);
            // respuesta textual en JSON de la API
            // console.log(xhr.responseText);

            // Convertimos en JSON la respuesta textual de la API
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            // Mostramos el contenido en la web
            json.forEach(user => {
                const $li = document.createElement('li');
                const $fieldset = document.createElement('fieldset');
                const $legend = document.createElement('legend');

                $legend.textContent = `${user.name}`;
                $fieldset.appendChild($legend);
                $fieldset.innerHTML += `Email : ${user.email} <br> Phone : ${user.phone}`;
                $li.appendChild($fieldset);
                
                $fragment.appendChild($li);
            });

            $list.appendChild($fragment);


        }else{
            console.error(`Conexion fallida => ${xhr.status}`);
            let message = xhr.statusText || `<h2> Error : ${xhr.status} - Ocurrio un error !!!</h2>`;
            $list.innerHTML = message;
        }
        // console.log(xhr);

    });

    // Creamos la peticion de tipo GET y le pasamos como segundo parametro la url de nuestra API (que contiene informacion en formato JSON)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    // Tambien podemos mandar peticiones a un archivo JSON ,XML , HTML de manera local!!
    // xhr.open("GET","./users.json"); 

    // Enviamos nuestra peticion
    xhr.send();

})();