'use strict'
//$(document).ready(()=>{//el dolar resume la palabra JQuery
jQuery(document).ready(()=>{

    //Selector de ID
    $("#rojo").css("background","red")
                        .css("color","white")
                        .css("height","50px")
                        .css("text-align","center")
                        .css("font-size","40px");

    $("#amarillo").css("background","yellow")
    .css("height","50px")
    .css("text-align","center")
    .css("font-size","40px");                        


    $("#verde").css("background","green")
    .css("color","white")       
    .css("height","50px") 
    .css("text-align","center")
    .css("font-size","40px");             
    
    //Selectores de clases
    var cls = $(".zebra").css("padding","5px");
    console.log(cls);


    /*$('.sin-borde').click(function(){
        console.log('me has dado click');
        $(this).addClass('zebra');
    });
*/
    //Selectores de Etiquetas
    var parrafos = $('p').css("cursor","pointer");
    parrafos.click(function(){
        var X = $(this);
        if(X.hasClass('zebra')){
            X.removeClass('zebra');
        }else{
            X.addClass('zebra');
        }
    });

    //Selectores de Atributo
    $('[title="Google"]').css('background','yellow');
    $('[title="Facebook"]').css('background','blue');
    $('[title="Youtube"]').css('background','red');
    $('[title="Whatsapp"]').css('background','green');
    $('[title="Github"]').css('background','black');

    //seleccionando mas de un tipo
    $('p , a').addClass('margen-superior');


    //Como buscar una etiqueta dificil de encontrar
    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);
});