<?php
require_once "sesiones.php";
require_once "bd.php";
comprobar_sesion();


$resul = insertar_pedido($_SESSION["carrito"], $_SESSION["usuario"]);
if ($resul === false) {
    echo "No se ha podido realizar el pedido<br>";
} else {
    $_SESSION["carrito"] = [];
    echo true;
}
