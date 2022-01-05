'use strict'

window.addEventListener('load',()=>{
    
    let form = document.querySelector('#form');
    let box = document.querySelector('.dashed');
    
    hideBox(box);
    
    form.addEventListener('submit',()=>{
    
        const data = validateData();
        renderData(data);
        
        if(data !== false){
            showBox(box);
        }
        
    });
});

const hideBox = box =>{
    box.style.display = "none";
}

const showBox = box =>{
    box.style.display = "block";
}

const validateData = () => {
    let name = document.querySelector('#name').value;
    let lastname = document.querySelector('#lastname').value;
    let age = parseInt(document.querySelector('#age').value);
    let skill = document.querySelector('#profession').value;

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

    return [name, lastname, age, skill];
}

const renderData = data =>{
    let p_name  = document.querySelector("#p_name span");
    let p_lastname  = document.querySelector("#p_lastname span");
    let p_age  = document.querySelector("#p_age span");
    let p_skill = document.querySelector("#p_skill span");

    p_name.innerHTML=data[0];
    p_lastname.innerHTML=data[1];
    p_age.innerHTML=data[2];
    p_skill.innerHTML=data[3];
}