// 6) desarrolla un programa que simule una descarga en base a un tamaño en GB introducido por teclado function(1) 
/*
    ejemplo : 
    function(1)
    devuelve : 
        Download. . .
        Download. . .
        Download. . .
        Download. . .
        Download. . .
        Download Complete!!!

 */

'use strict'

const downloadScript = size =>{
    let iterator = size * 5;
    let interval = 500;
    let execution = setInterval(() => {
        console.log(`[${iterator}] => Download. . .`);
        if(iterator === 1 ){
            clearInterval(execution);
            console.warn("Download Complete!!!");
        }
        iterator--;
    }, interval);
}

let size = parseInt(prompt("enter your file size en GB : "),0);
downloadScript(size);