// 18) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
import validateString from "./validations.js";
'use strict'

const separatorString = (data , separator) =>
    (validateString(data) && validateString(separator))
        ? console.log(data.split(separator))
        : console.warn(`wrong parameters => parameter{${typeof(data)}} , parameter1{${typeof(separator)}},\n was expected => parameter{string} , parameter1{string}`);    
        
    

// Testing
separatorString("hello bro what are you doing ?", " ");
separatorString("hello bro, what are you doing?","o");
separatorString("hello bro, what are you doing? , i am , making code", ",");
separatorString("hello bro, what are you doing? , i am , making code", "a");
separatorString([], " ");
separatorString({}, " ");
separatorString();
separatorString([]);
separatorString("",[]);
separatorString("hello i am programming ", 56);
separatorString([], ",");