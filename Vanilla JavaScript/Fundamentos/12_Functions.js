'use strict'
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

