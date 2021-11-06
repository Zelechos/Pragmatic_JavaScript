// x Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// x Valida que el título no rebase los 100 caracteres.
// x Valida que el director no rebase los 50 caracteres.
// x Valida que el año de estreno sea un número entero de 4 dígitos.
// x Valida que el país o paises sea introducidos en forma de arreglo.
// x Valida que los géneros sean introducidos en forma de arreglo.
// x Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
'use strict'

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

// validamos el director no rebase 50 caracteres
export function validateDirector(director){
    try {
        // validamos que el title cuenta con 100 o menos caracteres
        if (director.length <= 50){
                return true;
        } else {
            throw new Error(` ==> the number characters ${director.length} wrong\n==> was expected 50 or less characters!!`);
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed director finished !!");
    }
}

// validamos el año tenga 4 digitos y que sea un numero
export function validateYear(year){
    try {
        // validamos que el title cuenta con 100 o menos caracteres
        if (validateNumber(year)){
            if(year <= 9999 && year > 999){
                return true;
            } else {
                throw new Error(` ==> the number digits ${year.toString().length} wrong\n==> was expected 4 digits!!`);
            }
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed year finished !!");
    }
}

// validamos que country sea un Array 
export function validateCountry(country){
    try {
        // validamos que es un Array
        if (validateArray(country)){
            if(country.length >= 1){
                return true;
            } else {
                throw new Error(` ==> the array length is ${country.length} wrong\n==> was expected 1 or greater!!`);
            }
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed country finished !!");
    }
}

// validamos que generos sea un Array 
export function validateGender(gender){
    try {
        // validamos que es un Array
        if (validateArray(gender)){
            if(gender.length >= 1){
                return true;
            } else {
                throw new Error(` ==> the array length is ${gender.length} wrong\n==> was expected 1 or greater!!`);
            }
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed gender finished !!");
    }
}

// validamos la calificacion que se entre 0 y 10 y que tengo un decimal example => 3.2
export function validateQualification(qualification){
    try {
        // validamos que el title cuenta con 100 o menos caracteres
        if (validateNumber(qualification)){
            if(qualification <= 10 && qualification >= 0){
                return true;
            } else {
                throw new Error(` ==> the qualification ${qualification} wrong\n==> was expected from 0 than 10!!`);
            }
        }
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.warn("==> Preprocessed qualification finished !!");
    }
}

// Module para verificar si es un string
export function validateString(data){
    try {
        if(typeof(data) != "string" && data instanceof(String) == false){
            throw new Error(` ==> Tipo de Dato ${typeof(data)} incorrecto!! `);
        }    
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }finally{
        console.warn("==> Preprocessed text finished !!");
    }
}

// Module para verificar si es un number
export function validateNumber(data){
    try {
        if(typeof(data) != "number" && data instanceof(Number) == false){
            throw new Error(` ==> Tipo de Dato ${typeof(data)} incorrecto!! `);
        }    
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }finally{
        console.warn("==> Preprocessed number finished !!");
    }
}

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
