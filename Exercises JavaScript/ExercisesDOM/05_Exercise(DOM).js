'use strict'

window.addEventListener('load',()=>{
    
    let formulario = document.querySelector('#Form');
    let box_dashed = document.querySelector('.dashed');
    
    box_dashed.style.display = "none";//para desactilet el div
    formulario.addEventListener('submit',()=>{
    
        console.log('Evento Capturado');
        
        let name = document.querySelector('#nombre').value;
        let lastname = document.querySelector('#apellido').value;
        let age = parseInt(document.querySelector('#edad').value);
        let skill = document.querySelector('#profesion').value;

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

        box_dashed.style.display = "block";//para actilet el div

        let p_name  = document.querySelector("#p_name span");
        let p_lastname  = document.querySelector("#p_lastname span");
        let p_age  = document.querySelector("#p_age span");
        let p_skill = document.querySelector("#p_skill span");

        p_name.innerHTML=name;
        p_lastname.innerHTML=lastname;
        p_age.innerHTML=age;
        p_skill.innerHTML=skill;
        
    });
});