    'use strict'
$(document).ready(function(){

/*otra manera de traer los datos
    document.querySelector('#btn').addEventListener('click', Data());

    function Data (){
        const XHTTP = new XMLHttpRequest();
        XHTTP.open('GET', './Js/data.json', true);
        XHTTP.send();
        XHTTP.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
            }
        }
    }
*/
$('#FACE').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[0]; 
        MetaData(obj);
    });     
})

$('#GIT').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[1]; 
        MetaData(obj);
    });     
})

$('#GOO').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[5]; 
        MetaData(obj);
    });     
})

$('#INST').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[2]; 
        MetaData(obj);
    });     
})

$('#WHAT').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[3]; 
        MetaData(obj);
    });     
})

$('#TWET').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[4]; 
        MetaData(obj);
    });     
})
    
    






    function MetaData(Obj){

            if(Obj.Empresa == "Facebook"){
                $('#facebook').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }else if(Obj.Empresa == "GitHub"){
                $('#github').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }else if(Obj.Empresa == "Instagram"){
                $('#instagram').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }else if(Obj.Empresa == "Whatsapp"){
                $('#whatsapp').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }else if(Obj.Empresa == "Twitter"){
                $('#twitter').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }else if(Obj.Empresa == "Google"){
                $('#google').append(
                '<h1>'+Obj.Empresa+'</h1>'+
                '<h3>'+Obj.Fundador+'</h3>'+
                '<a>'+Obj.Img+'</a>'+
                '<h4>Oficinas : '+Obj.Oficinas+'</h4>'+
                '<h4>'+Obj.Lugar+'</h4>'+
                '<h4>Año : '+Obj.Año+'</h4>'+
                '<h4> Ingresos : '+Obj.Ingresos+'</h4>');
            }
            

        }
    
    });




    
    

