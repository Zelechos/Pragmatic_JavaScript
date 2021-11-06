// La clase Movie recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
'use strict'
import validationsExports from "./validations.js";
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

    // Metodos getters & setters
    get getIdMovieImdb(){
        return this.idMovieImdb;
    }

    set setIdMovieImdb(idMovieImdb){
        this.idMovieImdb = idMovieImdb;
    }

    get getTitle(){
        return this.title;
    }

    set setTitle(title){
        this.title = title;
    }

    get getDirector(){
        return this.director;
    }

    set setDirector(director){
        this.director = director;
    }

    get getReleaseYear(){
        return this.releaseYear;
    }

    set setReleaseYear(releaseYear){
        this.releaseYear = releaseYear;
    }

    get getCountryOfOrigin(){
        return this.countryOfOrigin;
    }

    set setCountryOfOrigin(countryOfOrigin){
        this.countryOfOrigin = countryOfOrigin;
    }

    get getGender(){
        return this.gender;
    }

    set setGender(gender){
        this.gender = gender;
    }

    get getImdbRating(){
        return this.imdbRating;
    }

    set setImdbRating(imdbRating){
        this.imdbRating = imdbRating;
    }

    // Valida que los géneros introducidos esten dentro de los géneros aceptados*.
    acceptedGenres(gender) {
        if(validationsExports.validateGender(gender)){
            let validetState = true , index_captured;
            for (let index = 0; index < gender.length; index++) {
                if(validationsExports.acceptedGenres.includes(gender[index])){
                    validetState = true;
                } else{
                    validetState = false;
                    index_captured = index;
                    break;
                }
            }

            if(!validetState){
                console.error(`no es un genero aceptado ${gender[index_captured]}`);
            } else {
                console.log(`generos validados correctamente`);
            }
            return validetState;
        }
    }

    //Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    imdbRatingValue(imdbRating){
        if(validationsExports.validateQualification(imdbRating)){
            return console.log(`la calificion es => ${imdbRating.toFixed(1)}`);
        }
    }   

    // mostrar la ficha tecnica 
    dataSheet(){
        let data = `
            <fieldset>
                <legend>DATA SHEET</legend>
                <ul>
                    <li>ID : ${this.idMovieImdb}</li>
                    <li>TITLE : ${this.title}</li>
                    <li>DIRECTOR : ${this.director}</li>
                    <li>RELEASE YEAR : ${this.releaseYear}</li>
                    <li>COUNTER ORIGIN : ${this.countryOfOrigin}</li>
                    <li>GENDER : ${this.gender}</li>
                    <li>RATING : ${this.imdbRating.toFixed(1)}</li>
                </ul>
            </fieldset>
        `;
        return data;
    }

    // mostrar un error en pantalla de validacion
    dataSheetError(){
        let data = `
            <fieldset>
                <legend>DATA SHEET</legend>
                <h1>ERROR EN LA VALIDACION</h1>
            </fieldset>
        `;
        return data;
    }

    // metodo statico para devolver los generos aceptados
    static acceptedGenresDatabase(){
        return console.log(`the accepted genres are => [${validationsExports.acceptedGenres}]`,);
    }

    // metodo statico para hacer las validaciones
    static validationsFinal(idMovieImdb, title, director, releaseYear, countryOfOrigin, gender, imdbRating){
        
        const data = [idMovieImdb, title, director, releaseYear, countryOfOrigin, gender, imdbRating];
        let iterator = 0, validateState =  true;

        for (const key in validationsExports) {

            if(validationsExports[key](data[iterator])){
                console.log(key);
                console.log(data[iterator]);

            } else {
                validateState =  false;
            }

            if(iterator === 6 ){
                break;
            }
            iterator++
        }
        console.error("_____________________validation finished_________________________");
        return validateState;
    }
}