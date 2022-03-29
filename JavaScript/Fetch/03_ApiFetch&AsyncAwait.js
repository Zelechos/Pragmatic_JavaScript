(()=>{
    const $list = document.getElementById('async');
    const $fragment = document.createDocumentFragment();

    // Funcion asincrona
    async function getData(){
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await response.json();

            // IMPORTANTE !! El throw es como un return que manda el flujo de la programacion al catch retorna pero al catch
            if(!response.ok)throw {status: response.status, statusText: response.statusText}

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

        }catch(error){

            console.error(error);
            let message = error.statusText || `<h2> Error : ${error.status} - Ocurrio un error !!!</h2>`;
            $list.innerHTML = message;

        }finally{
            console.warn("I love the code");
        }
    }
    
    getData();
    
})();