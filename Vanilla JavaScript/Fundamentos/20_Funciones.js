let h = miFuncion( 19 , 1 , 5);
console.log("la suma es : ",h);

//Declaracion de la Funcion
function miFuncion(a = 4  , b = 5){
    //Podemos ver cuantos argumentos ha reciibido nuestra funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    
    return a + b + arguments[2];
}

let Respuesta = miFuncion( 9 , 1 , 10);
console.log("la suma es : ",Respuesta);

//Declaracion de la Funcion de tipo expresion
let Suma = function(a , b){return a + b};
let Resta = function(a , b){return a - b};
let Multiplicacion = function(a , b){return a * b};
let Division = function(a , b){return a / b};

Respuesta = Suma(1,2); 
console.log("La Suma es : ",Respuesta);
Respuesta = Resta(9,3); 
console.log("La Resta es : ",Respuesta);
Respuesta = Multiplicacion(10,3); 
console.log("La Multiplicacion es : ",Respuesta);
Respuesta = Division(9,3); 
console.log("La Division es : ",Respuesta);


// funciones del tipo self invoking
(function(a , b){
    console.error("Ejecutando la funcion ", a * b);
})(3 , 4 );


console.log("Ejecutando Funcion Self Invoking  . . . ");
const array = ['Ether', 'net','web'];
(function(Login , ...Password){
    console.log("Login : ", Login);
    console.log("Password : ", ...Password);
})("Ether",array);


//Metodo toString
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones del tipo Flecha
const exponente = (texto) => texto;
let resp = exponente("hola soy una funcion flecha weee");
console.log(resp);


console.clear();
//Ejercicio de Practica


let respuesta = sumarParametros(5, 3, 2, 7, 234, 5, 1, 7, 4);

//Definimos nuestra funcion
function sumarParametros(){
    let res = 0 ;

    for(let i = 0 ; i < arguments.length; i++){
        res += parseInt(arguments[i]);
    }
    return res;
}

console.log(respuesta);


//Tipos primitivos

//Paso por valor
let x = 99;

function cambioValor(r){
    r = 100;
}
cambioValor(x);// x = 99 
console.log(x);


//Para por Referencia

const Persona = {
    nombre: 'Argus',
    apellido: 'Aphocraphex'
}

//Definimos nuestro metodo 
function cambiarValorObjeto(p1){
    p1.nombre = "Ether";
    p1.apellido = "Zelechos";
}

cambiarValorObjeto(Persona);
//el objeto persona sufre un cambio de valor
console.log(Persona);

