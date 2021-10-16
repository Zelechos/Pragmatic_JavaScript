'use strict'
// exportando mi constante PI
export const PI = Math.PI;
export const account = {
    user : "TheCoder",
    password : "()=>FuckYou",
}

// no se pueden tener mas de dos export default en un script
export default function greet(){
    console.log("hello coder <>");
}

export class Greet{
    constructor(){
        console.log("hellor hacker <>");
    }
}