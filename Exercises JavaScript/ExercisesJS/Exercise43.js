// 43) desarrollar una funcion que dado que pida un numero si el numero es impar el programa finalize si el numero es par mostrar los numeros en pantalla ejemplo function(5) programa finalizo
window.addEventListener('load', ()=> {
    'use strict'

    let number = 0;
    let recorderPairs = [];

    const pairToContinue = number =>{
        let timeout = 1000;
        let execution = setTimeout(() => {
            number = Number(prompt("enter a number pair : ",0));
            if(number % 2 ===0){
                record(number);
                pairToContinue(number);
            }else{
                clearTimeout(execution);
                document.write(`<h1>ADIOS</h1>`);
            }
        }, timeout);
    }

    const record = number =>{
        let response = "";
        recorderPairs.push(number);
        for (const element of recorderPairs) {
            response += "["+element+"]=>";
        }
        document.write(
            `<ul>
                <li><h1>${response}</h1></li>
            </ul>
            `
        );
            
    }

    pairToContinue(number);
});