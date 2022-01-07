'use strict'

//window.addEventListener('load', ()=>{

    //Creando Mi Primer Objeto
    let Serie = {
        Titulo : "DARK" ,
        Año : "2017 - 2020",
        Nacionalidad : "Alemana",
        Genero : "Ciencia Ficcion"
    }

    //array de objetos
    let Series = [
        {Titulo : "Chernobyl" , Year : 2019 , Nacionalidad : "Rusa" , Genero : "Drama"},
        Serie
    ];

    let SeriesVistar = document.querySelector('#Series');
    
    for(let index in Series){
        let parrafo = document.createElement('p');
        console.log(Series[index].Titulo );
        parrafo.append(Series[index].Titulo);
        SeriesVistar.appendChild(parrafo);
    }
//});