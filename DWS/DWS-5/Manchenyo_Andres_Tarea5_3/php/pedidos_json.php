<?php
define("CADENA_CONEXION", 'mysql:dbname=pedidos;host=127.0.0.1');
define("USUARIO_CONEXION", 'root');
define("CLAVE_CONEXION", '');

try {
    $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

    $sel = "SELECT pedidos.CodPed, pedidos.Fecha, pedidos.Enviado, pedidosproductos.Unidades, productos.Nombre, productos.Descripcion FROM pedidos INNER JOIN pedidosproductos ON pedidos.CodPed = pedidosproductos.CodPed INNER JOIN productos ON pedidosproductos.CodProd = productos.CodProd";
    $resul = $bd->query($sel);

    $fila = 0;
    $pedidos = [];

    if ($resul->rowCount() === 0) {
        return false;
    } else {
        while ($row = $resul->fetch()) {
            $pedidos[$fila] = $row;
            $fila++;
        }
        echo json_encode($pedidos);
    }
} catch (PDOException $e) {
    echo 'Error con la base de datos: ' . $e->getMessage();
}
