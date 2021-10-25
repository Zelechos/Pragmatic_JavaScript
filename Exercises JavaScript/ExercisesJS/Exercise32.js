// 32) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
import { validateObjectDate } from "./validations.js";
'use strict'

const ageUser = date => 
    (validateObjectDate(date))
        ? console.log(`the age of user is => ${new Date().getFullYear() - date.getFullYear()}`)
        : console.warn(`wrong parameter => parameter{${typeof(date)}} \n was expected => parameter{object}`); 

// Testing
let test = new Date(1984,4,23);
ageUser(test);
ageUser(new Date(1996,4,23));
ageUser(100);
ageUser("ether");
ageUser(false);
ageUser();