'use strict'

const List = [ "JavaScript","Java","Python","C","PHP","Golang", "C++"];

// Usando break
for (var i =0 ; i < List.length; i++){
    if(List[i] === "C"){
        break;
    }
    console.log(List[i]);
}

console.log("---------------------------------------------");

// Usando continue
for (var i =0 ; i < List.length; i++){
    if(List[i] === "C"){
        continue;
    }
    console.log(List[i]);
}

// Mostrar los numeros pares de un array

console.log("---------------------------------------------");

const Pares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let index = 0; index < Pares.length; index++) {
    if(Pares[index] % 2 != 0){// aqui verificamos si los los numeros son impares
        continue;
    }
    console.log(Pares[index]);
}