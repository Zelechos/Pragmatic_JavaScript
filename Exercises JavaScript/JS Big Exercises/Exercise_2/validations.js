// x Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros 
'use strict'

// Modulo para validar Arrays
export function validateArray(array){
    try {
        if(!(array instanceof Array)){
            throw new Error(` ==> Tipo de Dato ${typeof(array)} incorrecto!! `);
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed array finished !!");
    }
}

// validamos el ID DE IMDB : EF9283746
export function validateIdImdb(idImdb){
    try {
        // validamos que el id cuenta con 9 caracteres
        if (idImdb.length === 9){
            // validamos que los primeros 2 sean letras y los 7 restantes números.
            // example : ef2938471
            let idPattern = /^([a-zA-Z]){2}([0-9]){7}$/;
            if (idPattern.test(idImdb)){
                return true;
            } else {
                throw new Error(` ==> the pattern characters ${idImdb} wrong\n==> was expected for example =>{ef2938471}!!`);
            }
        } else {
            throw new Error(` ==> the number characters ${idImdb.length} wrong\n==> was expected 9 characters!!`);
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed idIMDB finished !!");
    }
}

// validamos el titulo no rebase 100 caracteres
export function validateTitle(title){
    try {
        // validamos que el title cuenta con 100 o menos caracteres
        if (title.length <= 100){
                return true;
        } else {
            throw new Error(` ==> the number characters ${title.length} wrong\n==> was expected 100 or less characters!!`);
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed title finished !!");
    }
}
