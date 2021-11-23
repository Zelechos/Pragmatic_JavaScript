// 45) con Promesas realizar una validacion de un array para luego invertir ese array
'use strict'

const invertArray = (array)=>{

    if(!(array instanceof Array))
        return Promise.reject(`error 999 : the value is [${typeof array}] was expected => Array`);

    return new Promise((resolve, reject)=>{
        console.warn(`cargando...`);
        let time = 3000;
        setTimeout(() => {
            // Creamos un objetos para enviar el array y su inversa
            const arraysContainer = {
                array,
                arrayReverse : array.map(element => element).reverse(),
            }
            
            resolve(arraysContainer);
            
        }, time);
    });
    
}

const array = [2,3,4,5,9,8,7];

invertArray(array)
    .then(arrayObject => {
        console.log(`the array is : ${arrayObject.array} , the reverse of array is : ${arrayObject.arrayReverse}`);
        return invertArray(["ether", "net", "etherias", "zelechos"]);
    })
    .then(arrayObject => {
        console.log(`the array is : ${arrayObject.array} , the reverse of array is : ${arrayObject.arrayReverse}`);
        return invertArray(['(', '{', '(', ')', '}', ')']);
    })
    .then(arrayObject =>{
        console.log(`the array is : ${arrayObject.array} , the reverse of array is : ${arrayObject.arrayReverse}`);
        return invertArray(12354);
    })
    .then(arrayObject => {
        console.log(`the array is : ${arrayObject.array} , the reverse of array is : ${arrayObject.arrayReverse}`);
        return invertArray({username:"etherias", password:"hacker"});
    })
    .catch(error => console.error(error));
