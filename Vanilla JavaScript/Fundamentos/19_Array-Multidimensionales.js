'use strict'

var Terror = ['Masacre de Texas','Jeppers Screepers','JU-ON','El Aro','El Conjuro'];
var Romanticas = ['50 Sombras de Gray','Cuestion de Tiempo','Diarios de una Pasion'];
var Series = ['The Big Bang Theory','Sillicon Valley','DARK','Mr.Robot','CHERNOBYL','Rick y Morty'];
var Cinematografia  = [Terror,Romanticas,Series] ;

document.write(Cinematografia[0][0]);

/*
var Elemento;
do{
// PUSH para añadir un evento al Array

Elemento = prompt("Introduzca su Pelicula de Romance Favorita : ");
Romanticas.push(Elemento);

}while(Elemento != 'puto');
Romanticas.pop();
console.log(Romanticas);
*/

var Indice = Series.indexOf('Mr.Robot');

if (Indice > -1) {
    Series.splice(Indice,1);//para eliminar el indice indicado
}
console.log(Series);

var Catalogo = Series.join();//para convertir tu array en un String
console.log(Catalogo);

var SeriesFinal = Catalogo;//para convertir un string a un array
var BestSeries = SeriesFinal.split(",");
console.log(BestSeries);

//Metodos para Ordenar Arrays


console.log(Terror);

var TerroOrdenado = Terror.sort();//para ordenar un array por orden alfabetico
console.log(TerroOrdenado);

var TerroInverso = Terror.reverse();//para darle la vuelta al array
console.log(TerroInverso);





