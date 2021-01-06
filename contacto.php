<?php
 
if($_POST) {
    $nombre = "";
    $email = "";
    $mensaje = "";
    $recipient = "florenciafrioli@gmail.com"
     
    if(isset($_POST['nombre'])) {
      $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    if(isset($_POST['mensaje'])) {
        $mensaje = htmlspecialchars($_POST['mensaje']);
    }
    $headers  = 'CONSULTA WEB' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, "CONSULTA PAGINA WEB", $mensaje, $headers)) {
        echo "<p>Thank you for contacting us, $nombre. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>