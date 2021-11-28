<?php
require_once "sesiones.php";
require_once "bd.php";
comprobar_sesion();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Tabla de productos por categoria</title>
</head>

<body>
    <?php require "cabecera.php";
    $categorias = cargar_categoria($_GET["categoria"]);
    $productos = cargar_productos_categoria($_GET["categoria"]);
    if ($categorias === FALSE or $productos === FALSE) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
        exit;
    }
    foreach ($categorias as $cat) {
        echo '<h1>' . $cat["Nombre"] . "</h1>";
        echo '<p>' . $cat["Descripcion"] . '</p>';
        echo '<table>';
        echo '<tr><th>Nombre</th><th>Descripción</th><th>Peso</th><th>Stock</th><th>Comprar</th>';
        foreach ($productos as $producto) {
            $cod = $producto["CodProd"];
            $nom = $producto["Nombre"];
            $des = $producto["Descripcion"];
            $peso = $producto["Peso"];
            $stock = $producto["Stock"];
            if ($stock >= 1) {
                echo "<tr><td>$nom</td><td>$des</td><td>$peso</td><td>$stock</td>"
                    . "<td><form action = 'anadir.php' method = 'POST'>"
                    . "<select name='unidades' id='unidades'>";

                for ($i = 1; $i <= $stock; $i++) {
                    echo "<option value=' $i'>$i</option>";
                }
                echo "</select>"
                    . "<input type = 'submit' value = 'Comprar'>"
                    . "<input name = 'cod' type = 'hidden' value = '$cod'>"
                    . "</form></td></tr>";
            }
        }
    }


    echo "</table>";
    ?>

</body>

</html>