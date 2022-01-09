// 10) crear una funcion para generar muchas cuentas de usuarios y mostrarlas en la web

'use strict'

const cuenta = {
    name: 'alex',
    email: "zelechos@hotmail.com",
    password : "zelechos@"
}

const cuenta1 = {
    name: 'sofia',
    email: "zelechos@gmail.com",
    password : "ethernet"
}

const cuenta2 = {
    name: 'yolamda',
    email: "etherias@hotmail.com",
    password : "aphocraphex"
}

const cuenta3 = {
    name: 'luis',
    email: "aphocraphex@gmail.com",
    password : "etherias"
}

const cuenta4 = {
    name: 'esteban',
    email: "morphoid@gmail.com",
    password : "morphling"
}

const cuenta5 = {
    name: 'argus',
    email: "etherias@hotmail.com",
    password : "etherum"
}

const cuenta6 = {
    name: 'etherum',
    email: "field@hotmail.com",
    password : "etherum"
}

// DATABASE
const cuentasDatabase = [cuenta , cuenta1, cuenta2, cuenta3, cuenta4 , cuenta5 , cuenta, cuenta6];

const hackPassword = (...cuentasDatabase)=>{
    document.write(`<h1>Hack Passwords</h1>`);
    for (const key in cuentasDatabase) {
        document.write(`

        <style>
            body{
                background-color : #000;
                color: red;
            }
        </style>

        <fieldset>
            <legend>Victima : ${cuentasDatabase[key].name}</legend>
            <p>Email : ${cuentasDatabase[key].email}</p>
            <p>Password : ${cuentasDatabase[key].password}</p>
        </fieldset>
        <br>
        `);
    }
}

hackPassword(...cuentasDatabase);

