//Funcion Declarada
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
//Ivocacion de Funciones
estoEsUnaFuncion();

//Funcion que Devuelve un Valor
function unaFuncionQueDevuelveUnValor(){
    console.log("Hola bienvenido a tu Chat ... ");
    return "Escribe un Mensaje";
    console.log("Tenemos que escribir un Mensaje...");
    return "Falta, Escribir un Mensaje!!";
}

let valorDeNuestraFuncion = unaFuncionQueDevuelveUnValor();
console.log(valorDeNuestraFuncion);


//Funcion que Acepta Parametros
let Nombre = ["Sergio","Erick","Gustavo","Hector"];
function Saludar(Nombre = "Desconocido", Edad = "000" ){//Valores por defecto
    console.log(`Hola mi Nombre es ${Nombre} y mi edad es ${Edad}`);
}
Saludar(Nombre[2],99);
Saludar();


//Funciones Declaradas & Funciones Expresadas
funcionDeclarada();
function funcionDeclarada(){
    console.error("Esta es mi funcion Declarada puedes ejecutarse en cualquier parte de nuestro codigo incluso antes de su declaracion");
}
funcionDeclarada();

//Funcion Anonima
funcionExpresada();//Aqui nos da error pues solo las funciones Declaradas pues Invocarse antes de Declaracion
const funcionExpresada = function (){
    console.log("Esto es una funcion Expresada tambien conocida como funcion Anonima");
}
funcionExpresada();
