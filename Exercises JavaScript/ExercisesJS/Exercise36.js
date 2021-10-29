// 36) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
import { validateNumber, validateArray } from "./validations.js"
'use strict'

const squared = array => {
    if (validateArray(array)){
        if(array.length !== 0 ){
            let squaredArray = [];
            let validationState = true;
            for (let index = 0; index < array.length; index++) {
                if (validateNumber(array[index]) && validationState){
                    squaredArray.push(Math.pow(array[index], 2));
                    validationState = true;
                }else{
                    console.warn(`wrong element ${index} of array => element [${typeof(array[index])}] \n was expected => element [number]`); 
                    validationState = false;
                }
            }

            if(validationState){
                console.log(`array before => [${array}] \narray after => [${squaredArray}]`);
            }
        } else {
            console.error(`the array length is => 0 \nthere is nothing to calculate!!!`);
        }   
    }
}

// TESTING
squared([1, 4, 5]);
squared([1, 4, "5"]);
squared();
squared([]);
squared({});
squared(4);
squared("hello function");
squared(false);
squared([false, "hola", 4, 5]);






