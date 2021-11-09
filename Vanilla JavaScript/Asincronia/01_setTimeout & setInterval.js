'use strict'

// TEMPORIZADORES

// SET TIMEOUT
console.log("___________ SET TIMEOUT ___________");
let timeout = 1000;
let hackProcessing = setTimeout(() => {
    console.error("< hack completed >");
    console.warn(`processing malware. . .`);
}, timeout);

//el metodo clearTimeout() sirve para detener el temporizador
clearTimeout(hackProcessing);
console.log("program end setTimeout() finish");

// SET INTERVAL
console.log("___________ SET INTERVAL ___________");
let interval = 1000;
let watch = setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
}, interval);

//el metodo clearInterval() sirve para detener el temporizador
clearInterval(watch);
console.log("program end setInterval() finish");
