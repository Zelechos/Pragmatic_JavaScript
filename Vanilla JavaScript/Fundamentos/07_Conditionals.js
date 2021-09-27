'use strict'
// OPERADOR TERNARIO
// ATENCIOOOONN : Condicional pero en una sola linea de Codigo
let Edad = String(prompt("Digite su Edad para Ingresar al club secreto : "))

// Este es el condiconal
let Mayor = (Edad > 17)? "Eres Mayor" : "Eres un Mocoso";
console.log(Mayor);


// Condicional generica if - else sin llaves{}
let Name = String(prompt("Digite su Nombre : "))
let LastName = String(prompt("Digite sus Apellidos : "))
let Age = parseInt(prompt("Digite su Edad : "))

if(Name === "Alex" && LastName === "Tumiri Huanca" && Age > 18)alert("Bienvenido "+Name +" "+ LastName+ " \n De "+Age+" Edad");
  else alert("Usted no es un Usuario Valido . . .");


let Number1 = Number(prompt('Digite el Primer numero'));
let Number2 = Number(prompt('Digite el Segundo numero'));

/*if(Number1 < Number2){
  alert(Number2+" is the eldest \n" + Number1+" is the minor");
}else if(Number2 < Number1){
  alert(Number1+" is the eldest \n" + Number2+" es the minor");
}else{
  alert("Both numbers at the same");
}*/


//Una manera mas elegante de escribir condicionales en JS
if(Number1 < Number2)alert(Number2+" is the eldest \n" + Number1+" is the minor");
  else if(Number2 < Number1)alert(Number1+" is the eldest \n" + Number2+" es the minor");
    else alert("Both numbers at the same");
console.log("The Numbers are :\n Number1 : "+Number1+"\n Number2 : "+Number2);

let Palabra = "Ether";
let Frase = "Pragmatic Coder es lo mejor";

//Una manera muy elegante de escribir una Condicional
if (Palabra !== Frase)console.error(Palabra); 
else console.log(Frase);
