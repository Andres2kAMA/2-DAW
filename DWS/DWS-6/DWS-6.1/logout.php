<?php
require_once "sesiones.php";

comprobar_sesion();
$_SESSION = array();
session_destroy();
setcookie(session_name(), 123, time());
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesión cerrada</title>
</head>

<body>

    <p>La sesión se cerró correctamente, hasta la próxima</p>
    <a href="login.php">Ir a la página de login</a>
</body>

</html>