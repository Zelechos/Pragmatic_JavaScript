// 34) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
import validateString from './validations.js'
'use strict'

const validateNames = name =>
    (validateString(name))
    ? console.log(` the name { ${name} } has had a ${ validator(name) } `)
    : console.warn(`wrong parameter => parameter{${typeof(date)}} \n was expected => parameter{string}`); 

const validator = name =>(new RegExp(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(name))? "successful validation" : "wrong validation"

validateNames("Jonathan MirCha");
validateNames("Alex Tumiri Huanca");
validateNames("alex ether");
validateNames("alex Tumiri");
validateNames("MirCha");
validateNames("");
validateNames(5);
validateNames(false);
validateNames();
validateNames([]);
validateNames({});
validateNames("Alex "+ 6);