// 38)  Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
import { validateNumber, validateArray } from "./validations.js"
'use strict'

const arrayRipper = array => {
    if (validateArray(array)){
        if (array.length > 1){
            if(validateStatus(array)){
                let response = ripper(array);
                console.info({pairs : response[0], odd : response[1]});
            }
        }else{
            console.warn(`the length of the array must be greater than 1!!!`);
        }
    }
}

const ripper = array =>{
    let arrayPair = [] , arrayOdd = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            arrayPair.push(array[index]);
        }else{
            arrayOdd.push(array[index]);
        }
    }
    return [arrayPair, arrayOdd];
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
arrayRipper([1,2,3,4,5,6,7,8,9,0]);
arrayRipper([1,2,3,4,5,6,false,0]);
arrayRipper([]);
arrayRipper([1]);
arrayRipper([1 , "ether"]);
arrayRipper("[1,2,3,4,5,6,false,0]");
arrayRipper({});
arrayRipper(false);
arrayRipper(2341324);
arrayRipper();







