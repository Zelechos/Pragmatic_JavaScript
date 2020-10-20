'use strict'
window.addEventListener('load',()=>{


    let formulario = document.querySelector('#form');
    let fecha = new Date();
    console.log(Date);
    formulario.addEventListener("submit",
        ()=>{
            let Content = document.querySelector("#addPublicacion").value;
            let Tech = document.querySelector('#addTecnologia').value;
            let Year = fecha.getFullYear();
            let Month =  fecha.getMonth();
            let Day = fecha.getDate();
            let Message = `
            {
                "Tecnologia":  "${Tech}",
                "Fecha": "Publicado el : ${Day}/${Month+1}/${Year} ",
                "Publicacion": "${Content}"
            },
            `;

            if(Content.length <= 0){
                alert("LLene su Commit ");
            }else{
                localStorage.setItem("JSON", Message);
            }
        }
    );

    //JSON
    let box = document.querySelector('#json');
    
    box.innerHTML = localStorage.getItem('JSON');

    //Publicaciones
    $('#btnR').click(()=>{
        $.get('./Js/Publicaciones.json', response =>{
            console.log(response);
            for (let i = 0 ; i < response.length; i++){
                $('#Box').append(
                    '<div id="Publicaciones">'+
                        '<h1>'+response[i].Tecnologia+'</h1>'+
                        '<h3>'+response[i].Fecha+'</h3>'+
                        '<h4>'+response[i].Publicacion+'</h4>'+
                    '</div><br>'
                    );
            }

        });
    });      

    //Boton para Copiar
    const button = document.querySelector('#btnCopy');
    const alert = document.querySelector("#aviso");
    let input = document.querySelector('#json');

    button.addEventListener('click',()=>{
        input.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');

        alert.innerHTML = "Codigo Copiado";

        setTimeout(()=> alert.innerHTML = "" , 4000);
        
    });
//    let input = localStorage.getItem('INPUT');


    

});
