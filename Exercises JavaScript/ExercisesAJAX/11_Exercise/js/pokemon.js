'use strict';

const d = document;
const $main = d.querySelector("main");
const $links = d.querySelector(".links");

let endPoint = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemon(url){
    // Aqui reiniciamos el contenido del main para que puede hacer la paginacion!!!
    $main.textContent = "";
    try{
        // Incluimos el loader
        const $loader = d.createElement("img");
        $loader.src = "./assets/rings.svg";
        $loader.alt = "Cargando pokemons";
        $loader.className = "loader";
        $main.appendChild($loader);

        // creamos la peticion
        let response = await fetch(url);
        let json = await response.json();
        let $fragment = d.createDocumentFragment();;
        let $prevLink, $nextLink;

        if(!response.ok) throw {status: response.status, statusText: response.statusText};

        // Usamos un for tradicional par traer la informacion porque un forEach() no espera respuestas
        for (let index = 0; index < json.results.length; index++) {
            
            try{
                let data = await fetch(json.results[index].url);
                let pokemon = await data.json();
                let name = pokemon.name;
                let imageLink = pokemon.sprites.front_default;

                if(!data.ok) throw {status: data.status, statusText: data.statusText}

                const $fieldset = d.createElement('fieldset');
                const $legend = d.createElement('legend')
                $legend.textContent = name;
                $fieldset.appendChild($legend);

                const $img = d.createElement('img');
                $img.src = imageLink;
                $img.alt = name;

                $fieldset.appendChild($img);
                $fragment.appendChild($fieldset);

            }catch(error){
                let message = error.statusText || "Error al cargar los Pokemons";
                $main.innerHTML = `<h2>Error ${error.status} : ${message}</h2>`;
            }
        }

        //Removiendo el Loader y agregando los Pokemons
        $loader.remove();
        $main.appendChild($fragment);

        // console.log(json);
        $prevLink = json.previous ? `<a href="${json.previous}">◀️</a>` : "";
        $nextLink = json.next ? `<a href="${json.next}">▶️</a>` : "";

        $links.innerHTML = `${$prevLink} ${$nextLink}`
        // console.log($prevLink);
        // console.log($nextLink);

    }catch(error){  
        let message = error.statusText || "Error al Consumir la API Pokemons!!!!!";
        $main.innerHTML = `<h2>Error ${error.status} : ${message}</h2>`;
    }finally{
        console.warn("Pokemon tengo que atraparlos wuouuuoouuu");
    }
}

// Evento para que todos los pokemons se carguen
d.addEventListener("DOMContentLoaded", e => loadPokemon(endPoint));

// Evento para lo botones de Paginacion
d.addEventListener('click',e=>{

    if(e.target.matches(".links a")){
        e.preventDefault();
        loadPokemon(e.target.getAttribute("href"));
    }

});
