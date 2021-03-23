'use strict'

//window.addEventListener('load', ()=>{

    //Creando Mi Primer Objeto
    var Serie = {
        Titulo : "DARK" ,
        Año : "2017 - 2020",
        Nacionalidad : "Alemana",
        Genero : "Ciencia Ficcion"
    }

    //array de objetos
    var Series = [
        {Titulo : "Chernobyl" , Year : 2019 , Nacionalidad : "Rusa" , Genero : "Drama"},
        Serie
    ];

    var SeriesVistar = document.querySelector('#Series');
    
    for(var index in Series){
        var parrafo = document.createElement('p');
        console.log(Series[index].Titulo );
        parrafo.append(Series[index].Titulo);
        SeriesVistar.appendChild(parrafo);
    }
//});