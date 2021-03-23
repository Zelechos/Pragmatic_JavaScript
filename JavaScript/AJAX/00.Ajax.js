$(document).ready(function(){
    
    //Metodo LOAD
    //$('#data').load("https://reqres.in/");
    //$('#data1').load("https://motherfuckingwebsite.com/");

    //Metodos GET & POST

    // aqui usamos un objeto json para llegar a la pagina donde estan nuestra API    
    //$.get("https://reqres.in/api/users", {page:2}, function(response){
        $.get("https://reqres.in/api/users",function(response){
            console.log(response);
            response.data.forEach(element=>{
                $('#data').append("<p>"+element.id +'.- '+ element.first_name +' '+ element.last_name +"<br><img src="+element.avatar+">"+'  ' +"<br>email :"+element.email +"</p>");
            })
        });

    $('#formajax').submit(function(event){

        //para que no se cargue en otra pagina
        event.preventDefault();

        var user = {
            firstname : $('#lsName').val(),
            lastname : $('#frName').val(),
            age : $('#ag').val(),
            WebSite : $('#web').val()
        }
        var userx = {
            firstname : $('#lsName').val(),
            lastname : $('#frName').val(),
            age : $('#ag').val(),
            WebSite : $('#web').val()
        }

        console.log(user);
    
        $.post($(this).attr("action"), userx , function(response){
            console.log(response);
                $('#data1').append("<p>Nombre : "+response.firstname +' '+ response.lastname +'<br>Edad : '+ response.age +'<br>Web : '+response.WebSite +"</p>");
        }).done(function(){ 
            console.log("Data Saved")
        });

    //Method $.ajax
        $.ajax({
            type : 'POST', //tipo de peticion
            url : $(this).attr("action"),
            data : user,
            beforeSend : function(){
                console.log('Sending . . . ');
            },
            success : function(response){
                console.log(response);
                $('#data2').append("<p>Nombre : "+response.firstname +' '+ response.lastname +'<br>Edad : '+ response.age +'<br>Web : '+response.WebSite +"</p>");
            },
            error : function(){
                console.log('ERROR . . ');
            },
            timeout : 9000
        }) 

        return false;
    });

    


});
