// Crear un Boton con un enlace que cada ves que le demos un click cambie de url y direccion no usar array si no un map y tambien DOM
'use strict'

// Traemos nuestro button
const $linkButton = document.querySelectorAll(".btn");
const $labelName = document.querySelectorAll(".text");


// Creamos el map donde manejaremos los datos
const links = new Map([
    ["github", "https://github.com/Zelechos"],
    ["linkedin", "https://www.linkedin.com/in/alex-tumiri-huanca-6234b3195/"],
    ["facebook", "https://www.facebook.com/PragmaticCodersGroup"],
    ["twitter", "https://twitter.com/CoderPragmatic"],
    ["instagram", "https://www.instagram.com/pragmatic_coder/"],
]);

// Rutina para mostrar todos los datos
const showData = (button, label, data, index) => {
    const keys = [...data.keys()];
    let numberAleatorio = Math.round(Math.random() * 4);//0 al 4
    label[index].innerHTML = "";
    label[index].innerHTML = keys[numberAleatorio];
    button[index].setAttribute("href", data.get(keys[numberAleatorio]))
}

const main = ()=>{
    showData($linkButton, $labelName, links, 0);
    showData($linkButton, $labelName, links, 1);

    
    $linkButton[0].addEventListener("click", ()=>{
        setTimeout(()=>{
            showData($linkButton, $labelName, links, 0);
        },1000);
    });

    $linkButton[1].addEventListener("click", ()=>{
        setInterval(()=>{
            showData($linkButton, $labelName, links, 1);
        },1500);
    });
}

main();