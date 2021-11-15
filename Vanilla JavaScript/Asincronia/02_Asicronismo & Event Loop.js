/* 
Debes Aprender estos conceptos para entender el modelo de JavaScript
    - Procesamiento Single thread y Multi thread
    - Operaciones de CPU y Operaciones de I/O
    - Operaciones concurrentes y paralelas
    - Operaciones Bloqueantes y No Bloqueantes
    - Opeaciones Sincronas y Asincronas.

JavaScript usa un modelo asincrono y no bloqueante con un loop de eventos implementado en un solo hilo(single thread) para operaciones de entrada y salida(Input/Ouput)
*/

//-------- Codigo Sincrono Bloqueante ----------
// Funcion Anonima Autoejecutable
((()=>{
    console.log(`Synchronous Code!!!`);
    
    console.warn(`___Beginning___`);

    function two(){
        console.log(`two`);
    }

    function one(){
        console.log(`one`);
        two();
        console.log(`three`);
    }

    one();

    console.warn(`___End___`);

})()); 

console.error(`______________________________________________________________________`);

// Codigo Asincrono No Bloqueante
((()=>{

    console.log(`Asynchronous Code!!!`);
    
    console.warn(`___Beginning___`);
    function two(){
        let timeout = 1000;
        setTimeout(()=>{
            console.log(`two`);
        },timeout);
    }

    function one(){
        let timeout = 0;
        setTimeout(()=>{
            console.log(`one`);
        },timeout);
        two();
        console.log(`three`);
    }

    one();
    console.warn(`___End___`);

})());

