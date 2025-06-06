<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$destinatario = "diegoarriper081007@gmail.com";
$asunto = "Nuevo mensaje de contacto";

$cuerpo = "Nombre: $nombre\n";
$cuerpo .= "Email: $email\n";
$cuerpo .= "Mensaje:\n$mensaje";

$headers = "From: $email";

if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo "Mensaje enviado con éxito.";
} else {
    echo "Hubo un error al enviar el mensaje.";
}
?>