<?php

$bd = new PDO("mysql:dbname=pedidos;host=127.0.0.1", "root", "");
$ins = "SELECT * FROM productos";
$resul = $bd->query($ins);

$pedidos = array();
$cont = 0;

while ($row = $resul->fetch()) {
    $pedidos[$cont] = $row;
    $json = json_encode($pedidos);
    $cont++;
}

echo $json;
