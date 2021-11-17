'use strict'
// Promises Importante!!!!

function squaredPromise(value, timeout){

    if(typeof value !== "number") 
        return Promise.reject(`error 909 the value is ${typeof value} was expected a number!!!`);
        
    let numberAleatorio = Math.round(Math.random() * 2000);//0 al 2000
    // retornamos una instancia de una Promesa
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            const factorial = number => (number== 0 || number ==1)? 1 : number * factorial(number-1);

            // resolve() es un metodo que consiste es que si la promesa se resuelve
            resolve({
                value,
                factorial:factorial(value)
            });
            
        }, timeout || numberAleatorio);
    });
}

squaredPromise(0)
    .then(object => {//si se cumple la promesa
        console.warn(`Beginning Promises`);
        console.log(`response promise : number : ${object.value} , factorial : ${object.factorial}`);
        return squaredPromise(1);
    })   
    .then(object => {
        console.log(`response promise : number : ${object.value} , factorial : ${object.factorial}`);
        return squaredPromise(2);
    })
    .then(object => {
        console.log(`response promise : number : ${object.value} , factorial : ${object.factorial}`);
        return squaredPromise("3");
    })
    .then(object => {
        console.log(`response promise : number : ${object.value} , factorial : ${object.factorial}`);
        return squaredPromise(4);
    })
    .then(object => {
        console.log(`response promise : number : ${object.value} , factorial : ${object.factorial}`);
        console.warn(`End Promises`);
    })
    .catch(error => console.error(error));   //si la promesa no se cumple nos da un error