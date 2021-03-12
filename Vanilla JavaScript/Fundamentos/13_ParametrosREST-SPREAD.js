'use strict'

//Parametro REST ---> ...RestoDeFrutas
function frutas(fruta1,fruta2,...RestoDeFrutas){
  console.log("Fruta 1 :"+fruta1);
  console.log("Fruta 2 :"+fruta2);
  console.log(RestoDeFrutas);
}

frutas("pomelos","durznos","naranaja","limon","uva","pera");

//Parametro SPREAD ---> frutas( {...cajonFrutas} ,"pomelos","durznos","naranaja","limon","uva","pera");
let cajonFrutas = ["bananas","Manzanas","aguacate"];
frutas(...cajonFrutas,"pomelos","durznos","naranaja","limon","uva","pera");
