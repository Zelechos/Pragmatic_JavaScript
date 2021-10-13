'use strict'

// OR
// saludar = greet
function greet(name){
    name = name || "nobody"
    console.log(`Hello ${name}`);
}

console.log("--------------OR----------------");

greet("Alex");
greet();

console.log("hey" || "goodbye");
console.log("" || "goodbye");
console.log( true || "goodbye");
console.log( false || "goodbye");
console.log( null || "goodbye");
console.log( NaN || "goodbye");
console.log( undefined || "goodbye");
console.log( 1 || "goodbye");
console.log([] || "goodbye");
console.log( {} || "goodbye");

//AND
console.log("--------------AND----------------");
console.log( false && "goodbye");
console.log( null && "goodbye");
console.log( NaN && "goodbye");
console.log( undefined && "goodbye");
console.log(true && "goodbye");
console.log( 1 && "goodbye");
console.log([] && "goodbye");
console.log( {} && "goodbye");
