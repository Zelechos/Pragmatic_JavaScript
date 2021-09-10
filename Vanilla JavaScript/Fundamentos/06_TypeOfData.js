'use strict'

//Operators and Type of Data
let Number1  = 9;
let Number2 = 1;
let Sum = Number1+Number2;
alert("The result of the Sum : "+Number1+" + "+Number2+" = "+Sum);
console.log("The result of the Sum : "+Number1+" + "+Number2+" = "+Sum);

//Operators
let Whole_Number = 9;
let Text_String = "Hello my name is Argus Aphocraphex" ;
let Boolean = true;

let Number_False = "73";

console.log(Boolean);
console.log(Number(Number_False)+7);//a numero entero,decimal,etc
console.log(parseInt(Number_False)+17);//solo convierte una variable a numero entero
console.log(parseFloat(Number_False)+17);//solo convierte una variable a numero decimal
console.log(String(Whole_Number)+10);//para convertir una variable a Texto

//typeof para ver el tipo de dato de la variable
console.log(typeof Boolean);
console.log(typeof Text_String);

//Booleanos
let Verdadero = true;
let Falso = false;

console.warn("****Variables Verdadero && Falso ****");
console.log(Verdadero);
console.log(Falso);

console.warn('Tipo de dato:');
console.log(typeof Verdadero);
console.log(typeof(Falso));


// let dato = 10;
// let dato1 = false;


// console.log(dato);
// console.log(dato1);
// console.log(typeof(dato));
// console.log(typeof(dato1));

// // Cosas que se puede hacer con Boolean
// console.log("************************");
// console.log(Boolean(0));
// console.log(Boolean(-424));
// console.log(Boolean("si hay una cadena"));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(Infinity));

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(-0));
// console.log(Boolean(0n));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));


let Mensaje = `
    <style>
        .content{
            background-color: #000;
            color: white;
        }

        h1{
            font-size: 50px;
        }
    </style>

    <div class="content">
        <h1>1. Tipo de Datos Primitivos (Se accede Directamente al Valor)</h1>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>null</li>
            <li>undefined</li>
            <li>NaN</li>
        </ul>

        <h1>2. Tipo de Datos Compuestos (Se accede a la Referencia del Valor)</h1>
        <ul>
            <li>Object = {}</li>
            <li>array = []</li>
            <li>function(){}</li>
            <li>Class{}</li>
            <li>.etc</li>
        </ul>
    </div>
`;

document.write(Mensaje);
document.write("hola como estas....");