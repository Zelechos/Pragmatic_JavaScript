'use strict'

let Generos = ['Terror','Comedia','Romance'];
let Peliculas = ['Gray','100 days','Argo'];

let Cine = [Generos , Peliculas];

do{
    let Elemento = prompt('Digite una Pelicula : ');
    if(Elemento != 'x'){
        Peliculas.push(Elemento);
    }
}while(Elemento != 'x');

console.log(Peliculas);

let indice = Peliculas.indexOf('100 days');
if (indice > -1){
    Peliculas.splice(indice,1);
}

console.log(Peliculas);

console.log(Peliculas.join());//Para convertir un array a texto
let pel =Peliculas.join();
console.log(pel.split(","));//Para convertir un texto a array

//Ordenando el Arreglo
console.log("El Arreglo ordenando Alfabeticamente es : "+Peliculas.sort());

//Para Invertir un Array 
console.log(Generos);
console.log("El Arreglo Invertido es : "+Generos.reverse());

/*-----------------------BUSQUEDAS------------------------------------------*/
let Busqueda = String(prompt("Que Genero de Pelicula desea? "));

let Encontrar = Generos.find(Genero=>Genero === Busqueda);
let Indice = Generos.findIndex(Genero=>Genero === Busqueda);

console.log("Genero Encontrado : "+Indice+" .- "+Encontrar);

let Precios =[10,50,90,150,200,450,750,900,1250,1500];
let Economico = Precios.some(Precio => Precio >= 90);
let Estandar = Precios.some(Precio => Precio >= 750);
let Calidad = Precios.some(Precio => Precio >= 1500);

console.log("Pollo Economico Precios Desde :"+Economico);
console.log("Pollo Estandar Precios Desde :"+Estandar);
console.log("Pollo Calidad Precios Desde :"+Calidad);

