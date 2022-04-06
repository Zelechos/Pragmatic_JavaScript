(()=>{
    const $list = document.getElementById('axios-async');
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            // Llamando a la libreria axios!!
            // let response = await axios.get('./users.json'); ATENCION tambien sirve con archivos locales JSON, etc
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            let data = await response.data;
            // console.log(response);

            data.forEach(user => {
                const $li = document.createElement('li');
                const $fieldset = document.createElement('fieldset');
                const $legend = document.createElement('legend');
                $legend.textContent = `${user.name}`;

                $fieldset.appendChild($legend);
                $fieldset.innerHTML += `Email : ${user.email} <br> Phone : ${user.phone}`;

                $li.appendChild($fieldset);

                $fragment.appendChild($li);
            })

            $list.appendChild($fragment);
            
        }catch(error){
            // console.log(error.response);
            let text = error.response.statusText || "Algo anda mal !!! ";
            let message = `Error : ${error.response.status} => ${text}`;
            console.error(message);
            $list.innerHTML = message;

        }finally{
            console.warn('Axios with async await');
        }
    }

    getData();
})();