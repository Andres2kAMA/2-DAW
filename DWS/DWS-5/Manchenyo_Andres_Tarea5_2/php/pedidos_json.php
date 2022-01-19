<?php
require 'sesiones_json.php';
require_once 'bd.php';
if (!comprobar_sesion()) return;
$pedidos = cargar_productos_categoria($_GET['categoria']);
$cat_json = json_encode(iterator_to_array($pedidos), true);
echo $cat_json;
