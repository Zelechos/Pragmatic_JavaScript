// 29) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
import validateString, { validateNumber } from "./validations.js"
'use strict'

const gradesTransform = (degrees, thermometric_unit)  =>
    (validateString(thermometric_unit) && validateNumber(degrees))
    ? thermometricTransform(degrees, thermometric_unit)
    : console.warn(`wrong parameter => parameter{${typeof(degrees)}} , parameter1{${typeof(thermometric_unit)}} \n was expected => parameter{number} , parameter1{string}`);
    
    
    
const thermometricTransform = (degrees, thermometric_unit) =>{
    if (thermometric_unit === "C"){
        return console.log(`${degrees} grados Celsius son ${(degrees * 9/5) +32} grados Fahrenheit`);
    }else if (thermometric_unit === "F"){
        return console.log(`${degrees} grados Fahrenheit son ${(degrees - 32)*5/9} grados Celsius`);
    }else{
        return console.error(`Solo se aceptan las unidades termometricas de {C} y {F} !! No => {${thermometric_unit}}`);
    }
}

// Testing
gradesTransform(1 , "C");
gradesTransform(1 , "F");
gradesTransform();
gradesTransform(100 , "5");
gradesTransform(78);
gradesTransform(5 , 5);
gradesTransform(true);
gradesTransform(-100 , "C");
gradesTransform([]);