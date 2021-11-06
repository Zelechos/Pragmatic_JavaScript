/* 3) Programa una clase llamada Pelicula. La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
x Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
x Valida que el título no rebase los 100 caracteres.
x Valida que el director no rebase los 50 caracteres.
x Valida que el año de estreno sea un número entero de 4 dígitos.
x Valida que el país o paises sea introducidos en forma de arreglo.
x Valida que los géneros sean introducidos en forma de arreglo.
x Valida que los géneros introducidos esten dentro de los géneros 
  aceptados*.
x Crea un método estático que devuelva los géneros aceptados*.
x Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
x Crea un método que devuelva toda la ficha técnica de la película.
x Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
import Movie from './movie.js';
window.addEventListener('load', ()=> {
  'use strict'

  // Testing
  const gendersMovie1 = [ "Talk-Show", "Musical"]
  const gendersMovie2 = [ "Talk-Show","Action", "Adult"]
  const gendersMovie3 = [ "Adventure","Film Noir","Western"]

  const countrysMovie1 = ["Argentina"]
  const countrysMovie2 = [ "Inglaterra","Francia"]
  const countrysMovie3 = [ "Alemania", "Rusia" ,"U.S"]

  const moviesInstances = [
                          ["as2545678","It","tarantino",2000,countrysMovie1,gendersMovie1,9.6465],
                          ["xK1698763","The Shining","dross",1990,countrysMovie2,gendersMovie2,5.610654465],
                          ["Zj0125478","Dark Tower","kubick",1545,countrysMovie3,gendersMovie3,7.8797465]
  ];

  // Testing Method
  ((function (movies){

    for (let index = 0; index < movies.length; index++) {
    
      const movie = new Movie(...movies[index]);
      
      let status = movie.acceptedGenres(movie.getGender);
      movie.imdbRatingValue(movie.getImdbRating);

      if(Movie.validationsFinal(...movies[index]) && status){
        document.write(movie.dataSheet());
      }else{
        document.write(movie.dataSheetError());
      }

    }
  })(moviesInstances));

  Movie.acceptedGenresDatabase();
});