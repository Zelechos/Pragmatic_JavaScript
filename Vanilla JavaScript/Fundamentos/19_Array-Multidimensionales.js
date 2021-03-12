'use strict'

let Terror = ['Masacre de Texas','Jeppers Screepers','JU-ON','El Aro','El Conjuro'];
let Romanticas = ['50 Sombras de Gray','Cuestion de Tiempo','Diarios de una Pasion'];
let Series = ['The Big Bang Theory','Sillicon Valley','DARK','Mr.Robot','CHERNOBYL','Rick y Morty'];
let Cinematografia  = [Terror,Romanticas,Series] ;

document.write(Cinematografia[0][0]);

/*
let Elemento;
do{
// PUSH para añadir un evento al Array

Elemento = prompt("Introduzca su Pelicula de Romance Favorita : ");
Romanticas.push(Elemento);

}while(Elemento != 'puto');
Romanticas.pop();
console.log(Romanticas);
*/

let Indice = Series.indexOf('Mr.Robot');

if (Indice > -1) {
    Series.splice(Indice,1);//para eliminar el indice indicado
}
console.log(Series);

let Catalogo = Series.join();//para convertir tu array en un String
console.log(Catalogo);

let SeriesFinal = Catalogo;//para convertir un string a un array
let BestSeries = SeriesFinal.split(",");
console.log(BestSeries);

//Metodos para Ordenar Arrays


console.log(Terror);

let TerroOrdenado = Terror.sort();//para ordenar un array por orden alfabetico
console.log(TerroOrdenado);

let TerroInverso = Terror.reverse();//para darle la vuelta al array
console.log(TerroInverso);





