// 35) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
import validateString from "./validations.js"
'use strict'

const validateEmails = email =>
    (validateString(email))
    ? console.log(`the email { ${email} } had has a ${validator(email)}`)
    : console.warn(`wrong parameter => parameter{${typeof(email)}} \n was expected => parameter{string}`); 

const validator = email => (new RegExp(/^[\w]+@{1}[\w]+\.[a-z]{2,15}$/).test(email))? "successful validation" : "wrong validation"

// Testing
validateEmails("Alex Tumiri");
validateEmails("pragmaticmorphoid@gmail.com");
validateEmails("pragmatic,morph,oid@gmail.com");
validateEmails("");
validateEmails([]);
validateEmails({});
validateEmails(234523);
validateEmails(3453, "pragmaticmorphoid@gmail.com");
validateEmails();
validateEmails("pragmaticmorphoid@gmail.com" , 45 );
validateEmails(false);
validateEmails("hola @ como estasd y que haces");