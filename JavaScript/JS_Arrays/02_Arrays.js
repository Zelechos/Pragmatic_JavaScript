'use strict'

var Generos = ['Terror','Comedia','Romance'];
var Peliculas = ['Gray','100 days','Argo'];

var Cine = [Generos , Peliculas];

do{
    var Elemento = prompt('Digite una Pelicula : ');
    if(Elemento != 'x'){
        Peliculas.push(Elemento);
    }
}while(Elemento != 'x');

console.log(Peliculas);

var indice = Peliculas.indexOf('100 days');
if (indice > -1){
    Peliculas.splice(indice,1);
}

console.log(Peliculas);

console.log(Peliculas.join());//Para convertir un array a texto
var pel =Peliculas.join();
console.log(pel.split(","));//Para convertir un texto a array

//Ordenando el Arreglo
console.log("El Arreglo ordenando Alfabeticamente es : "+Peliculas.sort());

//Para Invertir un Array 
console.log(Generos);
console.log("El Arreglo Invertido es : "+Generos.reverse());

/*-----------------------BUSQUEDAS------------------------------------------*/
var Busqueda = String(prompt("Que Genero de Pelicula desea? "));

var Encontrar = Generos.find(Genero=>Genero === Busqueda);
var Indice = Generos.findIndex(Genero=>Genero === Busqueda);

console.log("Genero Encontrado : "+Indice+" .- "+Encontrar);

var Precios =[10,50,90,150,200,450,750,900,1250,1500];
var Economico = Precios.some(Precio=> Precio >= 90);
var Estandar = Precios.some(Precio=> Precio >= 750);
var Calidad = Precios.some(Precio=> Precio >= 1500);

console.log("Pollo Economico Precios Desde :"+Economico);
console.log("Pollo Estandar Precios Desde :"+Estandar);
console.log("Pollo Calidad Precios Desde :"+Calidad);

