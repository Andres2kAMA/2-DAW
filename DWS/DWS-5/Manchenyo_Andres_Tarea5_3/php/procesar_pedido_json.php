<?php
require_once "sesiones.php";
require_once "bd.php";
comprobar_sesion();


$resulStock = eliminar_stock($_SESSION["unidades"][0], $_SESSION["unidades"][1]);

if ($resulStock === false) {
    echo "No se ha podido realizar el pedido<br>";
} else {
    $resul = insertar_pedido($_SESSION["carrito"], $_SESSION["usuario"]);
    if ($resul === false) {
        echo "No se ha podido realizar el pedido<br>";
    } else {
        $_SESSION["carrito"] = [];
        echo true;
    }
}
