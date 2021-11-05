// 41) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
import { validateNumber , validateArray } from "./validations.js";
'use strict'

const averageNumbers = array =>{
    if (validateState(array)){
        console.warn("------- solucion anticuada ------");
        average(array);
        console.warn("------- solucion ECMASCRIPT-6 ------");
        averageECMA6(array);

    }
}

// Solucion ECMASCRIPT 6 actual
const averageECMA6 = array => array.reduce((sum, element, index, array)=>{
    sum += element;
    if (index === array.length-1) 
        return console.log(`the array is [${array}]\nthe average ECMA-6 of the numbers is => ${sum/array.length}`);
    else 
        return sum;
});

// Esta es una solucion anticuadad de ECMASCRIPT 5 para abajo 
const average = array =>{
    let sum = 0;
    for (const iterator of array) {
        sum += iterator;
    }
    return console.log(`the array is [${array}]\nthe average of the numbers is => ${sum/array.length}`);
}
        

const validateState = array =>{ 
    if (validateArray(array)){
        if (array.length > 1){
            if(validateStatus(array)){
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
averageNumbers([9,8,7,6,5,4,3,2,1,0]);
averageNumbers([5,5,5,5,5]);
averageNumbers([1,2,3,4,5,6,false,0]);
averageNumbers([]);
averageNumbers([1]);
averageNumbers([1 , "ether"]);
averageNumbers("[1,2,3,4,5,6,false,0]");
averageNumbers({});
averageNumbers(false);
averageNumbers(2341324);
averageNumbers();