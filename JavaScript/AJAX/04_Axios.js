(()=>{

    const $list = document.getElementById('axios');
    const $fragment = document.createDocumentFragment();

    // Aqui llamamos de nuestro libreria al modulo de AXIOS 
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        // console.log(response);
        response.data.forEach(user => {
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
    .catch(error => {
        // console.error(error.response);
        let text = error.response.statusText || "Algo anda mal !!! ";
        let message = `Error : ${error.response.status} => ${text}`;
        console.error(message);
        $list.innerHTML = message;

    })
    .finally(()=>console.warn("Axios is the best"));


})();