'use strict'

// Funcion de Tipo Generator
function* generator(){
    yield "hey etherias";
    console.log(`are you not tired to hack?`);
    yield "no.. i love hack";
    console.error(`so can you hack mi boss??`);
    yield "no thanks";
    yield "bye...";
}

let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const message of iterator) {
    console.log(message);
}

const messages = [...generator()];
console.log(messages);

console.warn(`--------------- function generator square --------------------`);

// ejemplo aplicando otra Funcion Generator
const square = value => {
    // create a object
    let numberToSquare = {
        value, 
        square: Math.pow(value, 2)
    };

    setTimeout(()=>{
        return console.log(numberToSquare);
    },3000);

}

// funcion generator
function* generatorSquare(){
    console.warn(`Begin Generator Function`);
    yield square(9);
    yield square(2);
    yield square(3);
    yield square(10);
    console.warn(`End Generator Function`);
}

let cloneGenerator = generatorSquare();

for(const response of cloneGenerator){
    console.log(response);
}
