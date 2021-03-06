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
    <title>Lista de categorias</title>
</head>

<body>
    <?php require "cabecera.php" ?>
    <h1>Lista de categorias</h1>
    <?php $categorias = cargar_categorias();
    if ($categorias === false) {
        echo "<p class='error'>Error al conectar con la base de datos</p>";
    } else {
        echo "<ul>";
        foreach ($categorias as $cat) {
            $url = "productos.php?categoria=" . $cat["CodCat"];
            echo "<li><a href='$url'>" . $cat["Nombre"] . "</a></li>";
        }
        echo "</ul>";
    }
    ?>
</body>

</html>