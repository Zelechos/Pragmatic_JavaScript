// 39) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

import {validateArray, validateNumber} from "./validations.js";
'use strict'

const shortItems = array => {
    if (validateState(array)){
        console.warn("Aplicando sort() directamenete al array sin el metodo map()");
        console.log({upward : upwardArray(array)  , falling : downwardArray(array)});

        console.warn("Aplicando sort() junto con el metodo map() NOTA : NO ES FUNCIONAL DEL TODO!!!");
        console.log({upward : upArray(array)  , falling : downArray(array)});
    } 
}

const upwardArray = array => array.sort((a, b) => a - b);

const downwardArray = array => {
    let iterator = array.length-1;
    const cloneArray = []
    for (let index = 0; index < array.length; index++) {
        cloneArray[iterator]= array[index];
        iterator--;
    }
    return cloneArray;
}

//------------------------ aplicando map() -------------------------
const upArray = array => array.map(element => element).sort();
const downArray = array => array.map(element => element).sort().reverse();




const validateState = array =>{ 
    if (validateArray(array)){
        if (array.length > 1){
            if((validateStatus(array))){
                return true;
            }
        }else{
            return console.warn(`the length of the array must be greater than 1!!!`);
        }
    }
}

const validateStatus = array =>{
    let validateState = true, index_capture;    
    
    for (let index = 0; index < array.length; index++) {
        if(!(validateNumber(array[index]))){
            validateState = false;
            index_capture = index;
            break;
        }
    }

    if(!validateState){
        console.error(`wrong element ${index_capture} of array => element [${typeof(array[index_capture])}] \n was expected => element [number]`); 
    }
    return validateState;
}

// Testing
shortItems([7, 5,7,8,6]);
shortItems([1,2,3,4,5,6,7,8,9,10]);
shortItems([1,2,3,4,5,6,false,0]);
shortItems([]);
shortItems([1]);
shortItems([1 , "ether"]);
shortItems("[1,2,3,4,5,6,false,0]");
shortItems({});
shortItems(false);
shortItems(2341324);
shortItems();
