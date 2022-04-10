<?php
echo "no entro ";
if(isset($_POST)){
    echo "si entro ";

    error_reporting(0);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];


    $domain = $_SERVER['HTTP_HOST'];
    // Esta variable se refiere a quien va a ir el email
    $to = "zelechos9@gmail.com";
    // Esta variable ser refiere al asunto
    $subject = "Contacto desde el formulario de la web $domain : $subject";
    // Esta variable sirve par dejar un mensaje
    $message = "
    <p> 
        Datos enviados desde el formulario de la web $domain 
    </p>
    <ul>
        <li>Nombre : $name</li>
        <li>Email : $email</li>
        <li>Asunto : $subject</li>
        <li>Comentarios : $comments</li>
    </ul>";
    // La variable headers es muy importante porque aqui definimos la cabezeras de la peticion
    // Investigar y leer sobre los [MIME types]
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset =utf-8\r\n"."From: Envio automatico no responder!!! <no-reply@$domain>";

    // El metod mail(); retorna un booleano hay que tener muchos en cuenta esto ya que en base a la respuesta podemos tener validaciones
    $send_mail = mail($to, $subject, $message, $headers);

    if($send_mail){
        $response = [
            "error" => false,
            "message" => "Tus datos han sido enviados"
        ];
    }else{
        $response = [
            "error" => true,
            "message" => "Error al enviar los datos"
        ];
    }

    // Esta cabezera es para solucionar el problema con el CORS y para permitir que reciba peticiones de cualquier lado
    header("Access-Control-Allow-Origin: *");//ESTO NO ES SEGURO !!!

    // Tambien podemos especificar los dominios que puedan mandarnos peticiones
    //ejemplo con esto indicamos que solo puede recibir peticiones de  https://github.com/Zelechos !
    // header("Access-Control-Allow-Origin: https://github.com/Zelechos");

    // Aqui creamos nuestra cabezera que mandar datos en formato JSON
    header("Content-Type: application/json");
    echo json_encode($response);
    exit;// con el exit salimos de la peticion
}