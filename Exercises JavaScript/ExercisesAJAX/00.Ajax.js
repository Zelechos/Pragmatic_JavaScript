$(document).ready(function(){
    
    //Metodo LOAD
    //$('#data').load("https://reqres.in/");
    //$('#data1').load("https://motherfuckingwebsite.com/");

    //Metodos GET & POST

    // aqui usamos un objeto json para llegar a la pagina donde estan nuestra API    
    //$.get("https://reqres.in/api/users", {page:2}, function(response){
        $.get("https://reqres.in/api/users", function(response){
            console.log(response);
            
            response.data.forEach(element=>{
                let content = `
                <fieldset>
                    <legend>Person ${element.id}</legend>
                    <h2>Nombre : ${element.first_name} ${element.last_name} </h2>
                    <img src="${element.avatar}">
                    <h3>Email : ${element.email}</h3>
                </fieldset>
                `;
                $('#data').append(content);
            })
        });

    $('#formajax').submit(function (event){

        //para que no se cargue en otra pagina
        event.preventDefault();

        // Data para los eventos 
        const user = {
            firstname : $('#lsName').val(),
            lastname : $('#frName').val(),
            age : $('#ag').val(),
            WebSite : $('#web').val()
        }

        const userx = {
            firstname : $('#lsName').val(),
            lastname : $('#frName').val(),
            age : $('#ag').val(),
            WebSite : $('#web').val()
        }

        console.log(user);

        //Method $.Post
        $.post($(this).attr("action"), userx , response =>{
                console.log(response);
                let content = `
                <fieldset>
                    <legend>Data</legend>
                    <h2>Nombre : ${response.firstname} ${response.lastname} </h2>
                    <h3>Edad : ${response.age}</h3>
                    <h3>Web : ${response.WebSite}</h3>
                </fieldset>
                `;

                $('#data1').append(content);
            }).done(()=>{ 
            console.log("Data Saved");
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
                let content = `
                <fieldset>
                    <legend>Data</legend>
                    <h2>Nombre : ${response.firstname} ${response.lastname} </h2>
                    <h3>Edad : ${response.age}</h3>
                    <h3>Web : ${response.WebSite}</h3>
                </fieldset>`;
                $('#data2').append(content);
            },
            error : function(){
                console.log('ERROR . . ');
            },
            timeout : 9000
        }) 

        return false;
    });

});
