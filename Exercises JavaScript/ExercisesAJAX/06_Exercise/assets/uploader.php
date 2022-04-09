<?php
    // echo "Hello, response to the Server: \n";

    // $_FILES nos crea un array con la informacion de nuestro archivo
    //var_dump($_FILES);// El var_dump() simplemente sirve para mostrarnos un objeto 

    // Evaluamos si la variable existe\
    if(isset($_FILES["file"])){
        $name = $_FILES["file"]["name"];
        $file = $_FILES["file"]["tmp_name"];
        $error = $_FILES["file"]["error"];

        $destination = "../files/$name";

        $upload = move_uploaded_file($file, $destination);

        if($upload){
            $response = array(
                "error" => false,
                "status" => http_response_code(200),
                "statusText" => "Archivo $name cargado correctamente",
                "files" => $_FILES["file"]
            );
        }else{
            $response = array(
                "error" => true,
                "status" => http_response_code(400),
                "statusText" => "Error al subir el archivo $name",
                "files" => $_FILES["file"]
            );
        }

        // madamos nuestra respuesta en formato json 
        echo json_encode($response);
    }
