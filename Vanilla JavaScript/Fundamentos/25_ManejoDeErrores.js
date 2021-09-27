'use strict'

// Estructura de try - catch
try {
    console.log("mensaje antes del error");
    noexiste;
    console.log("mensaje despues del error");
} catch (error) {
    console.error("algo salio mal : "+error);
}finally{
    console.log("se termino la ejecucion del programa");
}

console.clear();
console.log("---------------manejo de error personalizado ---------------------");
// Personalizando nuestro propio try-catch para un error determinado
try {
    let number = "que flojera";
    if(isNaN(number)){
        throw new Error("El dato introducido por el Usuario No es un Numero!!!!")
    }

    number *= 100;
    console.log(number);
    
} catch (error) {
    console.error("Algo Salio mal ==> "+ error);
}finally{
    console.warn("Termino el Proceso");
}