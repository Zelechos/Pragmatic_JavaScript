'use strict'


//Comprobando Disponibilidad de LocalStorage
if(typeof(Storage) !== "undefined"){
    console.log("Local Storage Disponible");
}else{
    console.log("Local Storage NO esta Diponible");
}

//Guardando Datos en LocalStorage
localStorage.setItem("Titulo","Curso de React JS");

//Recuperar un Dato Guardado 
console.log(localStorage.getItem("Titulo"));

document.querySelector('#Series').innerHTML = "<h1>"+localStorage.getItem("Titulo")+"</h1>";

//Guardar Objetos en el Local Storage

var Usuario = {
    Login: "zelechos@hotmail.com",
    Password: "etherias"
}

localStorage.setItem("usuario", JSON.stringify(Usuario));

//Recuperar Objetos JSON mediante el Local Storage

var userObject = JSON.parse(localStorage.getItem("usuario"));
document.querySelector('#Series').innerHTML = "Login : "+userObject.Login+"<br>"+"Password : "+userObject.Password ;
console.log(userObject);

//localStorage.clear();