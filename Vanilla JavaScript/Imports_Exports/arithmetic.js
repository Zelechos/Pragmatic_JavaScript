'use strict'
function add (number , number1){
    return number + number1;
}

function subtract (number , number1){
    return number - number1;
}

function divide (number , number1){
    return number / number1;
}

function multiply (number , number1){
    return number * number1;
}

export const operations = {
    add,
    subtract,
    divide,
    multiply
}

// export default aplicado a una variable

// primero definimos la variable si no nos da error no se puede hacer 
// export default let nombredevariable MAL!!!!!
let link = "https://github.com/Zelechos/Pragmatic_JavaScript/issues/12"
export default link;
