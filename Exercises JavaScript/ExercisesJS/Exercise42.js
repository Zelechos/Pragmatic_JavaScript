// 42) Desarrollar una funcion que devuelva la caraga de un script 
'use strict'

let interval = 900;
let seconds = 11;
let iterator = 1;
let loadingBar = "¤¤¤¤¤¤¤¤¤¤¤";
let processing = setInterval(() => {
    seconds--;
    iterator++;
    let loading = loadingBar.slice(0 , -seconds);
    console.warn(`processing script in ${seconds} seconds \nloading: ${loading}`);

    if(seconds === 1){
        clearInterval(processing);
        console.error("< hack completed >");
    }
}, interval);
