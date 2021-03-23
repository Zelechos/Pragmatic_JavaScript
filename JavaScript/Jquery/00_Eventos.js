'use strict'
$(document).ready(()=>{

    //Eventos mouse over y mouse out
    var caja = $("#caja");
    var box = $("#box");
    var box1 = $("#box1");

    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css('background','green');
    });

    //Evento HOVER
function Violet(){
    $(this).css('background','rebeccapurple');
}

function Dark (){
    $(this).css('background','gray');
} 

box.hover(Violet , Dark);

    //Eventos Click & Double Click

    box1.click(function(){
        $(this).css('background','green');
    });


    //doble click 
    box1.dblclick(function(){
        $(this).css('background','pink');
    });

    var name =$("#nombre");
    name.focus(function(){
        $(this).css('border','2px solid green');
    });

    name.blur(function(){
        $(this).css('border','2px solid transparent');
        $("#datos").text($(this).val()).show();
    });

    //Eventos mousedown & mouseup
    var data = $("#datos1");
    data.mousedown(function(){
        $(this).css('border-color','red');
    });

    data.mouseup(function(){
        $(this).css('border-color','blue');
    });

    //Mousemove
    $(document).mousemove(function(){
        console.log(event.clientX);
        console.log(event.clientY);
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
            .css("top", event.clientY);
    });

});