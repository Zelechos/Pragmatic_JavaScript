// 52) Crear diferentes tipos de validaciones para los tipos de datos conocidos
'use strict';

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

// Modulo para validar Objetos
export function validateObjectDate(data){
    try {
        if(!(data instanceof Date)){
            throw new Error(` ==> Tipo de Dato ${typeof(data)} incorrecto!! `);
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }finally{
        console.warn("==> Preprocessed object finished !!");
    }
}

// Modulo para validar Arrays
export function validateArray(data){
    try {
        if(!(data instanceof Array)){
            throw new Error(` ==> Tipo de Dato ${typeof(data)} incorrecto!! `);
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }finally{
        console.warn("==> Preprocessed array finished !!");
    }
}