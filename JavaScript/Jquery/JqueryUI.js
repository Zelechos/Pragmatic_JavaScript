$(document).ready(function(){
    console.log('hola');

    //Mover elemento por la pagina
    $('.Element').draggable();

    //Redimensionar
    $('.Element').resizable();

    //Seleccionar elementos
    //$('.List').selectable();
    $('.List').sortable({
        update: function(event, ui){
            console.log("Ha Cambiado la Lista");
            console.log(ui);
            console.log(event);
        }
    });

    //Droppable
    $('#moved').draggable();
    $('#content').droppable({
        drop : ()=>{
            console.log('haz soltado algo adenttro');
        }
    });


    //Effects
    $('#effect').click(function(){
        $('.box-effects').toggle("shake", 4000);
    });

    //PLUGING

    //Tooltip
    $(document).tooltip();

    //Dialog
    $('#Exit').click(()=>{
        $("#popup").dialog();
    });

    //Datepicker
    $('#calendar').datepicker();

    //Tabs
    $('#tabs').tabs();

});