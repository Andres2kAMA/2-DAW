<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>

<body>
    <?php

    if (isset($_POST["recordarme"])) {

        echo $fecha;


    ?>
        <form method="post" action="registrado.php">

            <input type="submit" name="botonSalir" value="Salir"><br><br>
            <input type="submit" name="botonAcceder" value="Acceder">
        </form>
    <?php
    } else {
        echo "no guay";
        var_dump($_POST["recordarme"]);
    }

    ?>
    <form method="post" action="<?= $_SERVER['PHP_SELF']; ?>">
        <label>Usuario:</label>
        <input type=" text" name="nombre"><br><br>

        <label>Contraseña:</label>
        <input type="password" name="contrasenya"><br><br>

        <label>Recordarme:</label>
        <input type="checkbox" name="recordarme"><br><br>

        <input type="submit" name="boton" value="Acceder">
    </form>



</body>

</html>