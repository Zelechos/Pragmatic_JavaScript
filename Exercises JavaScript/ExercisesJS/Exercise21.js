// 21) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
import validateString from './validations.js'
'use strict'

const counterWord = (data, word) =>
    (validateString(data) && validateString(word))
    ? console.log(`[${data}] \n word concidences {${word}} => ${finderWord(data , word)}`)
    : console.warn(`wrong parameters => parameter{${typeof(data)}} parameter1{${typeof(word)}} \n was expected => parameter{string} parameter1{string}`);


const finderWord = (data, word) =>{
    let count = 0, database = data.split(" ");
    for (let index = 0; index < database.length; index++) {
        if(database[index] === word){
            count++;
        }
    }
    return count;
}

// Testing
counterWord("ether hello 9 ether 9 ether","9");
counterWord("ether hello 9 ether 9 ether","ether");
counterWord("ether hello ether ether", 9);
counterWord([],"ether");
counterWord("ether hello ether ether",false);
counterWord("ether hello ether ether");
counterWord(0,true);
counterWord();