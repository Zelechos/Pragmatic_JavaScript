const d = document;
const $shows = d.getElementById('shows');
const $template = d.getElementById('show-template').content;
const $fragment = d.createDocumentFragment();


// La funcion trabaja de forma asincrona dado que a la hora de apretar enter esperaremos la repuesta de la peticion que hagamos a la API MAZE TV
d.addEventListener('keypress', async e =>{
    if(e.target.matches('#search')){
        if(e.key === "Enter"){
            try{
                $shows.innerHTML = `<img class="loader" src="./assets/rings.svg" alt="loader">`
                let search = e.target.value.toLowerCase();
                let endpoint = `https://api.tvmaze.com/search/shows?q=${search}`;
                let response = await fetch(endpoint);
                let json = await response.json();

                if(!response.ok) throw {status : response.status , statusText : response.statusText};
                // console.log(json);
                if(json.length === 0){
                    $shows.innerHTML = `<h2>NO Existe resultados para el criterio de busqueda : "${search}"</h2>`;
                    setTimeout(()=>{
                        $shows.querySelector('h2').remove();
                    },5000)
                }else{
                    json.forEach(tv =>{
                        console.log(tv.show);
                        $template.querySelector("legend").textContent = tv.show.name;
                        $template.querySelector("div").innerHTML = tv.show.summary || "<p>Sin descripcion</p>";
                        $template.querySelector("img").src = tv.show.image ? tv.show.image.medium : "./assets/rollo-de-pelicula.png";
                        $template.querySelector("a").href = tv.show.officialSite || "#";
                        $template.querySelector("a").target = tv.show.officialSite ? "_blank" : "_self";
                        $template.querySelector("a").textContent = tv.show.officialSite ? "ve mas" : "";
                        
                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $shows.querySelector('.loader').remove();
                    $shows.appendChild($fragment);
                }
            }catch(error){
                console.log(error);
                let message = error.statusText || "Error al cargar los Shows";
                $shows.innerHTML = `<h2>Error ${error.status} : ${message}</h2>`;
            }finally{

            }

        }
    }
})