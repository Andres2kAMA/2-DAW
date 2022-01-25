<?php

require_once 'sesiones_json.php';
require_once 'bd.php';
if (!comprobar_sesion()) return;

$cod = $_GET["codUnProd"];
$producto = obtener_un_producto($cod);
$prod_json = json_encode(iterator_to_array($producto), true);
echo $prod_json;
