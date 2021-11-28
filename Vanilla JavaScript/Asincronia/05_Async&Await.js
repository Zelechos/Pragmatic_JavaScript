'use strict'
// Promise
function emailChecker(email){

    let myRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;

    if(!(myRegex.test(email)))
        return Promise.reject(`the email => [${email}] entered is not valid example : [zelechos@github.dev]`);

    return new Promise((resolve, reject)=>{

        let time = 1000;

        setTimeout(()=>{
            resolve(email);
        }, time);
        
    });
    
}

// esto es con una funcion asincrona
async function asincronaDeclarada(){
    try {
        console.warn(`inicio de funcion asincrona`);
        let test = "morphoide@gmail.com"
        
        let email = await emailChecker(test);
        console.log(`mensaje de funcion asincrona : ${email}`);

        email = await emailChecker("ethernet@gmail.com");
        console.log(`mensaje de funcion asincrona : ${email}`);

        email = await emailChecker("340527");
        console.log(`mensaje de funcion asincrona : ${email}`);
    } catch (error) {
        console.error(error);        
    } finally{
        console.warn(`process finished`);
    }
}

asincronaDeclarada();

// con una funcion definida segun los estandares ES6
const validateEmails = async () => {
    try{
        console.warn(`validation beginning!!`);
        let email = await emailChecker("etherum@bitcoin.bit");
        console.log(`email => ${email} | code:200 => [validate]`);
    } catch(error){
        console.error(error);
    } finally {
        console.warn(`validation finished!!`);
    }
}

validateEmails();

// Esto es con promesas usando .then().catch()
// emailChecker("Zelechos@github.dev")
//     .then((email)=>{
//         console.log(`the email is validate [${email}]`);
//         return emailChecker("aphocraphex@gmail.com");
//     })
//     .then((email)=>{
//         console.log(`the email is validate [${email}]`);
//         return emailChecker("aphocraphex@gmail");
//     })
//     .catch((error)=> console.error(error));
