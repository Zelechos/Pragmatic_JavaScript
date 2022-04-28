'use strict';

export async function ajax(props){
    let {url, success} = props;

    await fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json => success(json))
        .catch(error => {
            let message = error.statusText || "Ocurrio un error al acceder a la API!!!";
            document.getElementById('main').innerHTML = `
            <div class="error">
                <p>Error ${error.status} : ${message}</p>
            </div>`;
            document.querySelector('.loader').style.dysplay = "none";
            console.error(error);
        });
}