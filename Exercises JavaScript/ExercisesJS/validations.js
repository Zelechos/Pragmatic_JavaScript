'use strict'
// Module para verificar si es un string
export default function validateString(data){
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