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
        let Obj = response[0]; 
        $('#facebook').append(Data(Obj));
    });     
})

$('#GIT').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[1];
        $('#github').append(Data(obj));
    });     
})

$('#GOO').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[5]; 
        $('#google').append(Data(obj));
    });     
})

$('#INST').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[2]; 
        $('#instagram').append(Data(obj));
    });     
})

$('#WHAT').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[3]; 
        $('#whatsapp').append(Data(obj));
    });     
})

$('#TWET').click(function (){
    $.get('./Js/data.json' , response =>{
        let obj = response[4]; 
        $('#twitter').append(Data(obj));
    });     
})
    
//Data para mostrar
function Data(Obj){
    let DataShow = `
    <hr>
    <h1>${Obj.Empresa}</h1>
    <h3>${Obj.Fundador}</h3>
    ${Obj.Img}
    <h4>Oficinas : ${Obj.Oficinas}</h4>
    <h4>Residencia : ${Obj.Lugar}</h4>
    <h4>Año : ${Obj.Año}</h4>
    <h4>Ingresos : ${Obj.Ingresos}</h4>
    <a href="${Obj.Recurso}" download >Descargar Imagen</a>
    <a href="${Obj.Web}" target="_blank" >Ir a la Web</a>
    
    <hr>
`;
    return DataShow;
}

});