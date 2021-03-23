'use strict'
// Animaciones con jquery
$(document).ready(function(){

    /*$('#mostrar').hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();

        $("#box").fadeTo('slow', 1);
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $('#mostrar').show();

        $("#box").fadeTo('slow', 0);
    });

    $("#all").click(function(){
        jQuery("#box").slideToggle('slow');
    });*/

    $("#all").click(function(){
        $("#box").animate(
                    { 
                    marginLeft : '500px',
                    fontSize:'40px',
                    height: '110px'
                    },'slow')
                .animate(
                    {
                    borderRadius: '900px',
                    marginTop:'100px'
                    },'slow')
                .animate(
                    {
                    marginLeft:'0px',
                    
                    },'slow')
                .animate(
                    {
                    marginTop: '0px',
                    borderRadius: '100px'
                    },'slow')
                .animate(
                    {
                    fontSize: '27px',
                    borderRadius: '0px',
                    height: '70px',
                    marginTop: '20px',
                    paddingTop: '13px'
                    }, 'slow')
                .animate(
                    {
                    marginLeft : '500px',
                    }, 'slow');
    });
    
});