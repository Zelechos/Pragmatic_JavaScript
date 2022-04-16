'use strict';

// Traemos nuestra variables necesarias para crear el buscador de musica
const d = document;
const $form = d.getElementById('song-search');
const $main = d.querySelector('main');
const $artist = d.querySelector('.artist');
const $song = d.querySelector('.song');
const $loader = d.querySelector('.loader');
const $error = d.querySelector('.error');


// Evento para enviar el contenido de los input por el submit
$form.addEventListener('submit', async e =>{
    e.preventDefault();
    
    try{
        $loader.style.display = "block";
        let artist = e.target.artist.value.toLowerCase();
        let song = e.target.song.value.toLowerCase();

        let $artistTemplate = "";
        let $songTemplate = "";

        // Creamos variable para traer los endpoints de las APIs
        let artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        let songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        // Aqui creamos las peticiones para agregarlar al metodo Promise.all()
        // NOTA IMPORTANTE!!! : no le ponemos el await a nuestras fetch porque se la pondremos a la Promise.all()
        let artistFetch = fetch(artistAPI);
        let songFetch = fetch(songAPI);

        // Destructuramos el metodo Promise.all()
        let [responseArtist, responseSong] = await Promise.all([artistFetch, songFetch]);
        
        // Convertimos la responses de JSON FORMAT
        let artistData = await responseArtist.json();
        let songData = await responseSong.json();

        console.log(artistData);        
        console.log(songData);        

        console.warn(artistData.artists)
        // Validacion para la informacion del artista
        if(artistData.artists === null){
            $artistTemplate = `<h2>No se encontraron coicidencias del interprete</h2>`;
        }else{
            let artist = artistData.artists[0];
            $artistTemplate = `
                <h2>${artist.strArtist}</h2>
                <img src="${artist.strArtistThumb ?artist.strArtistThumb:artist.strArtistLogo}" alt="${artist.srtArtist}">
                <p>
                Nacimiento : ${artist.intBornYear}<br>
                Muerte : ${artist.intDiedYear ? artist.intDiedYear : "Presente\n"} <br>
                Descripcion : ${artist.strBiographyEN}
                </p>
            `
        }

        // Validacion para la letra de la cancion
        if(songData.error){
            $songTemplate = `<h2>No se encontraron coicidencias de la cancion ${song}</h2>`;
        }else{
            $songTemplate = `
            <h2>${song.toUpperCase()}</h2>
            <blockquote>${songData.lyrics}</blockquote>
            `;
        }

        $loader.style.display = "none";
        $artist.innerHTML = $artistTemplate;
        $song.innerHTML = $songTemplate;
        
    }catch(error){
        console.error(error);
        $loader.style.display = "none";
        let message = error.statusText ||"Ocurrio un error !";
        $error.inneHTML = `<h2>Error ${error.status} : ${message}</h2>`;
    }finally{
        console.warn('Code Love');
    }

});
