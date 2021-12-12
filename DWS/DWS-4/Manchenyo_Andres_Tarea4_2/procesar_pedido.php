<?php

use function PHPSTORM_META\type;

require_once "sesiones.php";
require_once "bd.php";
comprobar_sesion();

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./estilos/estilo.css">
    <link rel="stylesheet" type="text/css" href="./estilos/estiloCategorias.css">
    <title>Pedidos</title>
</head>

<body>
    <?php
    require "cabecera.php";
    $resulStock = eliminar_stock($_SESSION["unidades"][0], $_SESSION["unidades"][1]);

    if ($resulStock === false) {
        echo "No se ha podido realizar el pedido<br>";
    } else {
        $resul = insertar_pedido($_SESSION["carrito"], $_SESSION["usuario"]);
        if ($resul === false) {
            echo "No se ha podido realizar el pedido<br>";
        } else {
            echo "Pedido realizado con exito. Se enviará un correo de confirmación<br>";
            $_SESSION["carrito"] = [];
        }
    }


    ?>
</body>

</html>