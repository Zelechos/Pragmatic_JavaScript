// 2) Consumiendo la API de github traer los datos de la cuenta @zelechos y mostrar todos los datos del perfil
'use strict';

(()=>{ 

    async function getProfile(){

        const $fragment = document.createDocumentFragment();
        
        try{
            let response = await fetch("https://api.github.com/users/zelechos");
            let json = await response.json();
            
            if(!response.ok) throw {status: response.status}
            
            const $div = document.querySelector(".profile");
            
            // Creando las etiquetas
            const $h1 = document.createElement('h1');
            $h1.textContent = `${json.name}`;
            const $h3 = document.createElement('h3');
            $h3.textContent = `${json.bio}`;
            const $img = document.createElement('img');
            $img.src = json.avatar_url;
            $img.className = "avatar";
            
            const $fieldset = document.createElement('fieldset');
            $fieldset.className = "container";
            const $legend = document.createElement('legend');
            $legend.textContent = "links";
            const $linkProfile = document.createElement('a');
            $linkProfile.textContent = "Profile";
            $linkProfile.target = "_blank";
            $linkProfile.className = 'link';
            $linkProfile.href = json.html_url;

            const $linkFollowers = document.createElement('a');
            $linkFollowers.textContent = `Followers ${json.followers}`;
            $linkFollowers.target = "_blank";
            $linkFollowers.className = 'link';
            $linkFollowers.href = "https://github.com/Zelechos?tab=followers";

            const $linkFollowing = document.createElement('a');
            $linkFollowing.textContent = `Following ${json.following}`;
            $linkFollowing.target = "_blank";
            $linkFollowing.className = 'link';
            $linkFollowing.href = "https://github.com/Zelechos?tab=following";

            const $linkRepositories = document.createElement('a');
            $linkRepositories.textContent = `Repositories ${json.public_repos}`;
            $linkRepositories.target = "_blank";
            $linkRepositories.className = 'link';
            $linkRepositories.href = "https://github.com/Zelechos?tab=repositories";

            const $linkGists = document.createElement('a');
            $linkGists.textContent = `Gists ${json.public_gists}`;
            $linkGists.target = "_blank";
            $linkGists.className = 'link';
            $linkGists.href = "https://gist.github.com/Zelechos";

            $fieldset.appendChild($legend);
            $fieldset.appendChild($linkProfile);
            $fieldset.appendChild($linkFollowers);
            $fieldset.appendChild($linkFollowing);
            $fieldset.appendChild($linkRepositories);
            $fieldset.appendChild($linkGists);

            const $title = document.createElement('h2');
            $title.textContent = "My Code";

            $fragment.appendChild($img);
            $fragment.appendChild($h1);
            $fragment.appendChild($h3);
            $fragment.appendChild($fieldset);
            $fragment.appendChild($title);

            // Insertamos nuestras etiquetas
            $div.appendChild($fragment);

        }catch(error){
            console.error(`Error : ${error.status}`);
        }finally{
            console.warn("Programa Termino");
        }
    }

    getProfile();

})();