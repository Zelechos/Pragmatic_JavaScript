'use strict'
// Callbacks Importante!!!!

// NOTA: el callback es un mecanismo que tenemos para manejar el asincronia
function squareCallback (value, callback, timeout){
    let numberAleatorio = Math.round(Math.random() * 1000);//0 al 1000
    setTimeout(() => {
        callback(value, value*value);
    },  timeout || numberAleatorio);
}

// Aqui creamos nuestro primer callback
squareCallback(0, (value, result)=> {
    console.log("Beginning Callback!!");
    console.log(`Callaback : value=> ${value}, result=> ${result} .`);

    // Aqui iniciamos el callback hell!!
    squareCallback(1, (value, result)=> {
        console.log(`Callaback : value=> ${value}, result=> ${result} .`);

        squareCallback(2, (value, result)=> {
            console.log(`Callaback : value=> ${value}, result=> ${result} .`);

            squareCallback(3, (value, result)=> {
                console.log(`Callaback : value=> ${value}, result=> ${result} .`);

                squareCallback(4, (value, result)=> {
                    console.log(`Callaback : value=> ${value}, result=> ${result} .`);
                    console.warn(`End to callback hell !!! `);
                });
                // Esto puede ser infinito si queremos....
            });
        });
    });
});
