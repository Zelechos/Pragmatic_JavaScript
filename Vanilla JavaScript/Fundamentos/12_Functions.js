'use strict'
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

//Funciones Expresadas o Funcion Anonima
//funcionExpresada();//Aqui nos da error pues solo las funciones Declaradas pues Invocarse antes de Declaracion
const funcionExpresada = function (){
  console.log("Esto es una funcion Expresada tambien conocida como funcion Anonima");
}
funcionExpresada();

//Ejemplo de Funcion Anonima
const Mostrar = function(Codigo){
  let html = `
  <h1>Algoritmo la Pelicula</h1>
  <code>${Codigo}</code>
  `; 
  document.write(html);
} 

const code = `alert("man JavaScript will feed me");<br>
document.write("HelloWorld from document.write codeeeee ;) ");<br>
console.log("show this on the Console");<br>
console.log(8+1);`;
Mostrar(code);

//Funciones Self Invoking
const Lista = [ "JavaScript","Java","Python","C","PHP","Golang"];
(function(...ether){
  ether.forEach( elemento => {
      console.log(elemento);
  });
})(Lista);

//Ejemplos de Funcion Self Invoking
(function(){
  arguments[0].forEach(element =>{
      console.log(element);
  });
})(Lista);

//Metodos arguments & tostring

//arguments
function miFuncion(){
  //Podemos ver cuantos argumentos ha reciibido nuestra funcion
  console.log("Argumentos recibidos en la Funcion : ",arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
miFuncion(2, 3, 4);


//tostring
function Fibonacci(Numero){
  if(Numero == 0){
      return 0;
  }else if(Numero == 1 || Numero == 2){
      return 1;
  }else{
      return Fibonacci(Numero-1) + Fibonacci(Numero-2);
  }
}

// Con toString puedes ver el contenido de la funcion en formato texto
let res = ` Sucesion Fibonacci
  ${Fibonacci.toString()}
`;
console.log(res);


//Ejercicio con Funciones
let Opcion;
function Menu(){
  do{
    let Opcion = Number(prompt(" ---------- MENU----------- \n1.- Sumar \n2.- Restar\n3.- Multiplicar\n4.- Dividir\n 5.-Salir \n Elige una Opcion :\n"));

      switch(Opcion){
          case 1:
            const [Number1, Number2] = Data();
            alert("La suma es : "+Sumar(Number1,Number2));
          break;
          case 2:
            const [Number3, Number4] = Data();
            alert("La resta es : "+Restar(Number3,Number4));
          break;
          case 3:
            const [Number5, Number6] = Data();
            alert("La Multiplicacion es : "+Multiplicar(Number5,Number6));
          break;
          case 4:
            const [Number7, Number8] = Data();
            alert("La Division es : "+Dividir(Number7,Number8));
          break;
          case 5:
            if(confirm("Estas seguro de que quieres salir?")){
              this.close();//para cerrar la ventana emergente que sale del navegardor
            }
          break;
          default:
            alert("No existe es Opcion en el Menu Intenete de nuevo . ");
          break;
    }
    
  }while(Opcion != 5);
}

function Data(){
  let Number1 = parseInt(prompt("Digite un Numero : ",0));
  let Number2 = parseInt(prompt("Digite otro Numero : ",0));
  return [Number1 , Number2];
}

function Sumar(Number1 ,Number2){
  return Number1+Number2;
}

function Multiplicar(Number1,Number2){
  return Number1*Number2;
}

function Restar(Number1,Number2){
  return Number1-Number2;
}

function Dividir(Number1,Number2){
  return Number1/Number2;
}

function Mensaje(){
  alert("Mensaje destinado a la consola");
  return "Hola soy Un mensaje";
}

Menu();

