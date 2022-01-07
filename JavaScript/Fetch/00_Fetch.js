'use strict'

//FETCH para hacer peticiones asincronas al servidor/api rest

//fetch('https://jsonplaceholder.typicode.com/users')

let usuarios = document.querySelector('#users');
let janete = document.querySelector('#Janet');
let profesor = document.querySelector('#prof');
    
    getUsuarios()
    .then(data => data.json())
    .then(usuario =>{

        ListadoUsuarios(usuario.data);
        return getInfo();
    })
    .then(data=>{
        profesor.innerHTML = data;
        return getJanet();

    })
    .then(data => data.json())
    .then(usuaria => {
        mostrarJanet(usuaria.data);
    })
    .catch(error=>{
        console.log(error);
    });

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getInfo(){
    let Profesor = {
        name : 'Argus',
        lastname : 'Aphocraphex Ether',
        url : 'https://ethereum.org/en/'
    }

    return new Promise((resolve , reject)=>{
        let profesor_string = "";
        setTimeout(()=>{
            profesor_string = JSON.stringify(Profesor);
            if(typeof profesor_string != 'string' || profesor_string === " ") return reject('error');
            return resolve(profesor_string);
        },1000);
    });
}

function ListadoUsuarios(users){
    users.map((usuarioactual,i)=>{
        let nombre = document.createElement('h4');
        nombre.innerHTML = i + usuarioactual.first_name + " " + usuarioactual.last_name;
        usuarios.appendChild(nombre);
    });
    
    document.querySelector('.loading').style.display = "none";
}   

function mostrarJanet(jan){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = jan.first_name + " " + jan.last_name;
        avatar.src = jan.avatar;
        avatar.width = '100';
        
        janete.appendChild(avatar);
        janete.appendChild(nombre);
    
    document.querySelector('#Janet .loading').style.display = "none";
}   

