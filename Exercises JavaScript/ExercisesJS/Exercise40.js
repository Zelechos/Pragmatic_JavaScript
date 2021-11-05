// 40) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
import { validateArray } from './validations.js';
'use strict'

const removeDuplicates = array => {
    if(validateState(array)){

        console.warn("-----------aplicando metodos filter() & indexOf()-----------");
        console.log(`array before => `, array);
        console.log(`array after => `, array.filter((element, index, self) => self.indexOf(element) === index));
        //Una manera mas compresible de realizar la discriminacion de elementos iguales seria esta : 
        console.warn("-----------aplicando aplicando un nuevo tipo de dato Set-----------");
        console.log(`array before => `, array);
        console.log(`array after => `, [...new Set(array)]);
    }
}

const validateState = array =>{ 
    if (validateArray(array)){
        if (array.length > 1){
                return true;
        }else{
            return console.warn(`the length of the array must be greater than 1 and 0!!!`);
        }
    }
}

// Testing
removeDuplicates(["x", 10, "x", 2, "10", 10, true, true]);
removeDuplicates(["x"]);
removeDuplicates([]);
removeDuplicates({});
removeDuplicates("hola");
removeDuplicates(true);
removeDuplicates(["x", 10,  2, "10", true,"x", 10,  2, "10", true,9 ,"ether","ether",2,3,4,5,"ether"," https://github.com/Zelechos"," https://github.com/Zelechos"," https://github.com/Zelechos"," https://github.com/Zelechos",false]);


