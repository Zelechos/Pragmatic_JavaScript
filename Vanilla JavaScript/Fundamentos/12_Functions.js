'use strict'


function Menu(Mostrar =  false){
  do{
    var Opcion = Number(prompt(" ---------- MENU----------- \n1.- Sumar \n2.- Restar\n3.- Multiplicar\n4.- Dividir\n 5.-Salir \n Elige una Opcion :\n"));

      switch(Opcion){
          case 1:
          var Number1 = parseInt(prompt("Para Sumar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          alert("La suma es : "+Sumar(Number1,Number2));
          break;
          case 2:
          var Number1 = parseInt(prompt("Para Restar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          alert("La resta es : "+Restar(Number1,Number2));
          break;
          case 3:
          var Number1 = parseInt(prompt("Para Multiplicar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          alert("La Multiplicacion es : "+Multiplicar(Number1,Number2));
          break;
          case 4:
          var Number1 = parseInt(prompt("Para Dividir\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          alert("LA Division es : "+Dividir(Number1,Number2));
          break;
          case 5:
          alert("Fin del Programa");
          break;
          default:
          alert("No existe es Opcion en el Menu Intenete de nuevo . ");
          break;
    }
  }while(Opcion != 5);


}
function Menu(){
  do{
    var Opcion = Number(prompt(" ---------- MENU----------- \n1.- Sumar \n2.- Restar\n3.- Multiplicar\n4.- Dividir\n 5.-Salir \n Elige una Opcion :\n"));

      switch(Opcion){
          case 1:
          var Number1 = parseInt(prompt("Para Sumar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          document.write("La suma es : "+Sumar(Number1,Number2));
          break;
          case 2:
          var Number1 = parseInt(prompt("Para Restar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          document.write("La resta es : "+Restar(Number1,Number2));
          break;
          case 3:
          var Number1 = parseInt(prompt("Para Multiplicar\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          document.write("La Multiplicacion es : "+Multiplicar(Number1,Number2));
          break;
          case 4:
          var Number1 = parseInt(prompt("Para Dividir\n\nDigite un Numero : ",0));
          var Number2 = parseInt(prompt("Digite otro Numero : ",0));
          document.write("LA Division es : "+Dividir(Number1,Number2));
          break;
          case 5:
          alert("Fin del Programa");
          break;
          default:
          alert("No existe es Opcion en el Menu Intenete de nuevo . ");
          break;
    }
  }while(Opcion != 5);


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


Menu(true);

function Mensaje(){
  console.log("Mensaje destinado a la consola");
  return "Hola soy Un mensaje";
}
