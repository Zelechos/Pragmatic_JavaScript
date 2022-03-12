'use strict'

let genders = ['Terror','Comedia','Romance'];
let movies = ['Gray','100 days','Argo'];

let cine = [genders , movies];

do{
    let element = prompt('Digite una Pelicula : ');
    if(element !== 'x'){
        movies.push(element);
    }
}while(element !== 'x');

console.log(movies);

let indice = movies.indexOf('100 days');
if (indice > -1){
    movies.splice(indice,1);
}

console.log(movies);

console.log(movies.join());//Para convertir un array a texto
let pel =movies.join();
console.log(pel.split(","));//Para convertir un texto a array

//Ordenando el Arreglo
console.log("El Arreglo ordenando Alfabeticamente es : "+movies.sort());

//Para Invertir un Array 
console.log(genders);
console.log("El Arreglo Invertido es : "+genders.reverse());

/*-----------------------BUSQUEDAS------------------------------------------*/
let Busqueda = String(prompt("Que Genero de Pelicula desea? "));

let Encontrar = genders.find(Genero=>Genero === Busqueda);
let Indice = genders.findIndex(Genero=>Genero === Busqueda);

console.log("Genero Encontrado : "+Indice+" .- "+Encontrar);

let Precios =[10,50,90,150,200,450,750,900,1250,1500];
let Economico = Precios.some(Precio => Precio >= 90);
let Estandar = Precios.some(Precio => Precio >= 750);
let Calidad = Precios.some(Precio => Precio >= 1500);

console.log("Pollo Economico Precios Desde :"+Economico);
console.log("Pollo Estandar Precios Desde :"+Estandar);
console.log("Pollo Calidad Precios Desde :"+Calidad);

