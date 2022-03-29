(()=>{
        const $list = document.getElementById('fetch');
        const $fragment = document.createDocumentFragment();

        // Asi es como funciona la API Fetch
        fetch("https://jsonplaceholder.typicode.com/users")

        // fecth Tambien podemos mandar peticiones a un archivo JSON ,XML , HTML de manera local!!
        // fetch("./users.json")

            // .then(response =>{
            //     console.log(response);
            //     //IMPORTANTE!!! convertimos nuestra response que tenia como tipo ReadableStream a formate json() y lo retornamos a la siguiente promesa!!!
            //     return response.ok ? response.json() : Promise.reject(response)
            // })
            .then((response) => response.ok ? response.json() : Promise.reject(response))
            .then(json =>{
                // console.log(json);

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
                
            })
            .catch(error =>{
                    console.error(`Error : ${error.status} \n`);
                    let message = error.statusText || `<h2> Error : ${error.status} - Ocurrio un error !!!</h2>`;
                    $list.innerHTML = message;
            })
            .finally(()=>{
                console.warn('The Code is All');
            });
})();