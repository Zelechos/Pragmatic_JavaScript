'use strict'
const Cuenta = {
    name: 'alex',
    email: "zelechos@hotmail.com",
    password : "zelechos@"
}

const Cuenta1 = {
    name: 'sofia',
    email: "zelechos@gmail.com",
    password : "ethernet"
}

const Cuenta2 = {
    name: 'yolamda',
    email: "etherias@hotmail.com",
    password : "aphocraphex"
}

const Cuenta3 = {
    name: 'luis',
    email: "aphocraphex@gmail.com",
    password : "etherias"
}

const Cuenta4 = {
    name: 'esteban',
    email: "morphoid@gmail.com",
    password : "morphling"
}

const Cuenta5 = {
    name: 'argus',
    email: "etherias@hotmail.com",
    password : "etherum"
}

const Cuenta6 = {
    name: 'etherum',
    email: "field@hotmail.com",
    password : "etherum"
}

// DATABASE
const CuentasDatabase = [Cuenta , Cuenta1, Cuenta2, Cuenta3, Cuenta4 , Cuenta5 , Cuenta, Cuenta6];

function HackPassword(...CuentasDatabase){
    document.write(`<h1>Hack Passwords</h1>`);
    for (const key in CuentasDatabase) {
        document.write(`

        <style>
            body{
                background-color : #000;
                color: red;
            }
        </style>

        <fieldset>
            <legend>Victima : ${CuentasDatabase[key].name}</legend>
            <p>Email : ${CuentasDatabase[key].email}</p>
            <p>Password : ${CuentasDatabase[key].password}</p>
        </fieldset>
        <br>
        `);
    }
}

HackPassword(...CuentasDatabase);

