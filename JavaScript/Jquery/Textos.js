'use strict'
$(document).ready(function(){

    links();

    $('#add_button').click(function(){
    $('#list').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
    $('#add_link').val('');
    links();
    });

    $('#add_After').click(function(){
    $('#list').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');    
    $('#add_link').val('');
    links();
    });

});

function links(){
    $('a').each(function(){
        var etiqueta = $(this);
        var enlace = etiqueta.attr('href');
        etiqueta.attr("target","_blank");
        etiqueta.text(enlace);
    });
}