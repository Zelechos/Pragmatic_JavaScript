'use strict'

window.addEventListener('load',()=>{
    
    var formulario = document.querySelector('#Form');
    var box_dashed = document.querySelector('.dashed');
    
    box_dashed.style.display = "none";//para desactivar el div
    formulario.addEventListener('submit',()=>{
    
        console.log('Evento Capturado');
        
        var name = document.querySelector('#nombre').value;
        var lastname = document.querySelector('#apellido').value;
        var age = parseInt(document.querySelector('#edad').value);
        var skill = document.querySelector('#profesion').value;

        if(name.trim() == null || name.trim().length == 0){
            alert("No introdujo un Nombre");
            return false;
        }
        if(lastname.trim() == null || lastname.trim().length == 0){
            alert("No introdujo los Apellidos");
            return false;
        }
        if(age == null || age.length == 0 || isNaN(age)){
            alert("No introdujo su Edad");
            return false;
        }
        if(skill.trim() == null || skill.trim().length == 0){
            alert("No introdujo su Profesion");
            return false;
        }

        box_dashed.style.display = "block";//para activar el div

        var p_name  = document.querySelector("#p_name span");
        var p_lastname  = document.querySelector("#p_lastname span");
        var p_age  = document.querySelector("#p_age span");
        var p_skill = document.querySelector("#p_skill span");

        p_name.innerHTML=name;
        p_lastname.innerHTML=lastname;
        p_age.innerHTML=age;
        p_skill.innerHTML=skill;
        
    /*
    var Datos = [name , lastname , age];

    for(var indice in Datos){
        var parrafo = document.createElement('p');
        parrafo.append(Datos[indice]);
        box_dashed.append(parrafo);
    }
*/

    /* var name = document.querySelector('#nombre');
    var lastname = document.querySelector('#apellido');
    var age = document.querySelector('#edad');
    var Nombre = name.value;
    var Apellido = lastname.value;
    var Edad = age.value;
    document.write("Nombre es : "+Nombre+"<br>");
    document.write("Apellido es : "+Apellido+"<br>");
    document.write("Edad es : "+Edad+"<br>");
    */
    });
});