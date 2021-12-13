<?php
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
    <title>Carrito de la compra</title>
</head>

<body>
    <?php require "cabecera.php";
    $productos = cargar_productos(array_keys($_SESSION["carrito"]));
    if ($productos === FALSE) {
        echo "<p>No hay productos en el pedido</p>";
        exit;
    }
    echo "<h2>Carrito de la compra</h2>";
    echo "<table>";
    echo '<tr><th>Nombre</th><th>Descripción</th><th>Peso</th><th>Stock</th><th>Comprar</th>';
    foreach ($productos as $producto) {
        $cod = $producto["CodProd"];
        $nom = $producto["Nombre"];
        $des = $producto["Descripcion"];
        $peso = $producto["Peso"];
        $stock = $producto["Stock"];
        $unidades = $_SESSION["carrito"][$cod];
        $_SESSION["unidades"] =  [$unidades, $cod];
        echo "<tr><td>$nom</td><td>$des</td><td>$peso</td><td>$unidades</td>"
            . "<td><form action = 'eliminar.php' method = 'POST'>"
            . "<select name='unidades' id='unidades'>";

        echo "<option value=' $unidades'>$unidades</option>";
        for ($i = 1; $i <= $stock; $i++) {
            echo "<option value=' $i'>$i</option>";
        }
        echo "</select><br>"
            . "<input type = 'submit' value = 'Eliminar'>"
            . " <input name = 'cod' type = 'hidden' value = '$cod'>"
            . "</form></td></tr>";
    }
    echo "</table>";
    ?>
    <a href="confirmar_pedido.php">Realizar pedido</a>

</body>

</html>