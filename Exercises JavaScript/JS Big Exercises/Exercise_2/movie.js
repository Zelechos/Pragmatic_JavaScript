// La clase Movie recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
'use strict'
// exports the class Movie for default
export default class Movie{

    // constructor method
    constructor(idMovieImdb, title, director, releaseYear, countryOfOrigin, gender, imdbRating){
        // parameters
        this.idMovieImdb = idMovieImdb;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.countryOfOrigin = countryOfOrigin;
        this.gender = gender;
        this.imdbRating = imdbRating;
    }


}