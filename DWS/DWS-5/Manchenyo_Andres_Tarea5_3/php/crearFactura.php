<?php
require_once 'sesiones_json.php';
require_once 'bd.php';
if (!comprobar_sesion()) return;
$_SESSION["carrito"] = [];
$archivo = fopen("factura.txt", "a");
$pedidos = $_GET["productos"];
echo json_encode($pedidos, false);
fputs($archivo, $pedidos);
fclose($archivo);
